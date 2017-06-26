import sys
import rospy
import subprocess
import rosnode
import numpy as np
import cv2
import time
import os
import rospkg
timestr = time.strftime("%d-%m-%Y_%H-%M-%S.png")

# Ros Messages	 
from sensor_msgs.msg import CompressedImage

ros_nodes = rosnode.get_node_names()
if '/raspicam_node' in ros_nodes:
    command='rosservice call /camera/start_capture'
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
else:
    command='/home/erle/ros_catkin_ws/install_isolated/camera.sh'
    command+=';rosservice call /camera/start_capture'
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)

msg_image = rospy.wait_for_message('/camera/image/compressed', CompressedImage, timeout=7)
np_arr = np.fromstring(msg_image.data, np.uint8)
image_np = cv2.imdecode(np_arr, 1) #cv2.CV_LOAD_IMAGE_COLOR


rospack = rospkg.RosPack()
images_path = rospack.get_path('robot_blockly') + '/frontend/pages/images/'
cv2.imwrite(images_path+ 'image_' + timestr, image_np)

#cv2.imwrite('/home/erle/spider_ws/install_isolated/share/robot_blockly/frontend/pages/images/image_' + timestr, image_np)
#images_path = "/home/erle/spider_ws/install_isolated/share/robot_blockly/frontend/pages/images/"

files = len(os.listdir(images_path)) #amount of files in /frontend/images/ folder

if files > 7 : #allow 5 images max
    os.system("find "+images_path+" -name '*.png' | xargs ls -t | tail -n 1 | xargs rm")#remove oldest image

command="rosservice call /camera/stop_capture"
process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
