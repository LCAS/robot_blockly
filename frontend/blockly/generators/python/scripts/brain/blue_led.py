import rospy
import time
import rosnode
import subprocess
from std_msgs.msg import String

def talker():
  pub = rospy.Publisher('/statusleds', String, queue_size=10)
  rate = rospy.Rate(10)
  start = time.time()
  flag=True #time flag
  led=blue_led
  if (led == 'TRUE'):
    msg = 'blue'
  else:
    msg = 'blue_off'
  while not rospy.is_shutdown() and flag:
    sample_time=time.time()
    if ((sample_time - start) > 1):
      flag=False
    pub.publish(msg)
    rate.sleep()
if __name__ == '__main__':
  ros_nodes = rosnode.get_node_names()
  if not '/erle_statusleds' in ros_nodes:
    command='python /home/erle/spider_ws/src/ros_erle_statusled/scripts/statusleds.py'
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
  talker()	
