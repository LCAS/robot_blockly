import rosnode
import subprocess
import time

ros_nodes = rosnode.get_node_names()
if not '/imu_talker' in ros_nodes:
    command='/home/erle/spider_ws/install_isolated/share/ros_erle_imu/imu_talker'
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    time.sleep(10)
