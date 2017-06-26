import rosnode
import subprocess
import time
import os

ros_nodes = rosnode.get_node_names()
if not '/robot_state_publisher' in ros_nodes:
    os.system('ifconfig eth0 192.168.0.2')
    command='roslaunch sick_tim sick_tim571_2050101.launch'
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    time.sleep(10)
