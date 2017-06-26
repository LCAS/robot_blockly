import rospy
import subprocess
import rosnode
import rospkg
from sensor_msgs.msg import Range
ros_nodes = rosnode.get_node_names()
if not '/lrm30_node' in ros_nodes:
  rospack = rospkg.RosPack()
  command = rospack.get_path('lrm30_ros').replace('share', 'lib') + '/lrm30'
  process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
msg_laser = rospy.wait_for_message('/lrm30_data', Range, timeout=1)
