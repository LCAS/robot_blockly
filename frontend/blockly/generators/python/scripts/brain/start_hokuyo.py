import rosnode
import subprocess
import time
import os

ros_nodes = rosnode.get_node_names()
if not '/urg_node' in ros_nodes:
    os.system('ifconfig eth0 192.168.0.2')
    ip_add = '192.168.0.10'
    command='rosrun urg_node urg_node _ip_address:=' + ip_add
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    time.sleep(10)
