#!/usr/bin/env python
# Software License Agreement (BSD License)
#
# Copyright (c) 2015, Erle Robotics LLC
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions
# are met:
#
#  * Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
#  * Redistributions in binary form must reproduce the above
#    copyright notice, this list of conditions and the following
#    disclaimer in the documentation and/or other materials provided
#    with the distribution.
#  * Neither the name of Willow Garage, Inc. nor the names of its
#    contributors may be used to endorse or promote products derived
#    from this software without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
# "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
# LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
# FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
# COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
# INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
# BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
# LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
# CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
# LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
# ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
# POSSIBILITY OF SUCH DAMAGE.
#

import time
import os
import threading
import signal

from subprocess import Popen, check_output, CalledProcessError
from autobahn.asyncio.websocket import WebSocketServerProtocol, \
    WebSocketServerFactory

try:
    import asyncio
except ImportError:
    # Trollius >= 0.3 was renamed
    import trollius as asyncio


class CodeStatus(object):
    RUNNING = 'running'
    PAUSED = 'paused'
    COMPLETED = 'completed'

    __current_status = COMPLETED
    __write_lock = threading.Lock()
    __status_publisher = None

    @classmethod
    def get_current_status(cls):
        return cls.__current_status

    @classmethod
    def set_current_status(cls, value):
        with cls.__write_lock:
            if value not in [cls.RUNNING, cls.PAUSED, cls.COMPLETED]:
                raise Exception('Incorrect status of code: ' + value)
            else:
                cls.__current_status = value


class CodeExecution(object):
    __node_process = None
    __run_lock = threading.Lock()

    @classmethod
    def run_process(cls, arguments):
        with cls.__run_lock:
            if cls.__node_process is not None:
                for _ in range(10):
                    if cls.__node_process.poll() is None:
                        time.sleep(5)
                    else:
                        break
                if cls.__node_process.poll() is None:
                    cls.__node_process.terminate()
            cls.__node_process = Popen(arguments)
            global pid
            pid = cls.__node_process.pid
            print("\n######################")
            print("test.py PID=" + str(pid))
            print("######################\n")


class BlocklyServerProtocol(WebSocketServerProtocol):

    __current_code_status_subscriber = None
    __current_block_id_subscriber = None
    __current_block_publisher = None

    __plan_dir = os.path.realpath(os.getenv("PLAN_DIR", default=os.getcwd()))
    __plan_name = 'blockly_plan'

    def _send_code_status(self, message):
        print 'Current code status: %s' % message.data
        payload = 'status_update\n'
        payload += message.data
        self.sendMessage(payload.encode('utf-8'), False)

    def _send_current_block_id(self, message):
        payload = 'set_current_block\n'
        payload += message.data
        self.sendMessage(payload.encode('utf-8'), False)

    def onConnect(self, request):
        print("Client connecting: {0}".format(request.peer))
        # if self.__current_code_status_subscriber is None:
        #     rospy.Subscriber('current_code_status', String, self._send_code_status)
        # if self.__current_block_id_subscriber is None:
        #     rospy.Subscriber('current_block_id', String, self._send_current_block_id)

    def onOpen(self):
        print("WebSocket connection open.")

    def onMessage(self, payload, isBinary):
        # Debug
        if isBinary:
            print("Binary message received: {0} bytes".format(len(payload)))
        else:
            print("Text message received: {0}".format(payload.decode('utf8')))

            # Do stuff
            # pub = rospy.Publisher('blockly', String, queue_size=10)
            # time.sleep(1)
            # pub.publish("blockly says: "+payload.decode('utf8'))

            # Simple text protocol for communication
            # first line is the name of the method
            # next lines are body of message
            message_text = payload.decode('utf8')
            message_data = message_text.split('\n', 1)

            if len(message_data) > 0:
                method_name = message_data[0]
                if len(message_data) > 1:
                    method_body = message_data[1]
                    if method_name.startswith('play'):
                        CodeStatus.set_current_status(CodeStatus.COMPLETED)
                        self._play(method_body)
                    else:
                        print 'Called unknown method %s' % method_name
                else:
                    if 'end' == method_name:
                        print('execution ended')
                        self._start_plan(plan="stop")
                        CodeStatus.set_current_status(CodeStatus.COMPLETED)
                    else:
                        print('Called unknown method %s', method_name)

    def onClose(self, wasClean, code, reason):
        print("WebSocket connection closed: {0}".format(reason))

    def _play(self, blockly_code):
        self._build_plan_code(blockly_code)
        self._translate_plan()
        self._start_plan()

    def _build_plan_code(self, blockly_code):
        filename = os.path.join(self.__plan_dir, self.__plan_name) + '.plan'
        print("building the plan... in %s" % filename)
        target = open(filename, 'w')
        target.truncate()  # empties the file

        # target.write('''''')
        # Write the code that comes from blockly
        target.write(blockly_code)
        target.close()

    def _translate_plan(self):
        try:
            print "translate plan in %s" % self.__plan_dir
            print check_output(
                ['pnpgen_translator',
                 'inline', self.__plan_name + '.plan'],
                cwd=self.__plan_dir
            )
            print "translated plan"
        except Exception as e:
            print "failed translating plan: %s" % str(e)

    def _start_plan(self, plan=None):
        if plan is None:
            plan = self.__plan_name
        try:
            print "start plan in %s" % self.__plan_dir
            print check_output(
                ['./run_plan.py',
                 '--plan', plan],
                cwd=self.__plan_dir
            )
            print "started plan"
        except Exception as e:
            print "failed starting plan: %s" % str(e)


class RobotBlocklyBackend(object):
    __current_block_publisher = None

    @staticmethod
    def callback(data):
        print("I heard %s" % data.data)

    @staticmethod
    def __set_status_completed():
        CodeStatus.set_current_status(CodeStatus.COMPLETED)
        return None

    def __set_current_block_id(self):
        # should set this in ALMemory
        #self.__current_block_publisher.publish(request.block_id)
        #response = SetCurrentBlockIdResponse()
        #response.result = True
        return None

    @staticmethod
    def __is_status_paused():
        return (CodeStatus.PAUSED == CodeStatus.get_current_status())

    @staticmethod
    def wait_until_ros_node_shutdown(loop):
        while True:
            try:
                time.sleep(.1)
                yield
            except KeyboardInterrupt:
                print "shutdown"
                break
        loop.stop()

    def talker(self):
        # In ROS, nodes are uniquely named. If two nodes with the same
        # node are launched, the previous one is kicked off. The
        # anonymous=True flag means that rospy will choose a unique
        # name for our 'talker' node so that multiple talkers can
        # run simultaneously.
        # rospy.init_node('blockly_server', anonymous=True)
        # rospy.Subscriber("blockly", String, RobotBlocklyBackend.callback)
        # CodeStatus.initialize_publisher()
        # self.__current_block_publisher = rospy.Publisher('current_block_id', String, queue_size=5)

        # rospy.Service('program_is_paused', Trigger, RobotBlocklyBackend.__is_status_paused)
        # rospy.Service('program_completed', Empty, RobotBlocklyBackend.__set_status_completed)
        # rospy.Service('program_set_current_block_id', SetCurrentBlockId, self.__set_current_block_id)

        factory = WebSocketServerFactory(u"ws://0.0.0.0:9011")
        factory.protocol = BlocklyServerProtocol

        loop = asyncio.get_event_loop()
        coro = loop.create_server(factory, '0.0.0.0', 9011)
        server = loop.run_until_complete(coro)
        asyncio.async(RobotBlocklyBackend.wait_until_ros_node_shutdown(loop))

        loop.run_forever()

        print("Closing...")
        server.close()
        loop.run_until_complete(server.wait_closed())
        loop.close()


if __name__ == '__main__':
    backend = RobotBlocklyBackend()
    backend.talker()
