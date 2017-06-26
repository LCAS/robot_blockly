import sys
import rospy
import subprocess
import rosnode
import numpy as np
import time
import os
import rospkg
import cv2
import glob
# Ros Messages	 
from sensor_msgs.msg import CompressedImage

ros_nodes = rosnode.get_node_names()
if not '/hector_mapping' in ros_nodes:
    command='roslaunch hector_mapping mapping_default.launch'
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
if not '/hector_geotiff_node' in ros_nodes:
    command='roslaunch hector_geotiff geotiff_mapper.launch'
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)

#time.sleep(3)
rospack = rospkg.RosPack()
tiff_path = rospack.get_path('robot_blockly') + '/frontend/pages/maps/'

#while '/hector_mapping' in ros_nodes:
#rate = rospy.Rate(10)
pub_img = rospy.Publisher('syscommand', String, queue_size=10, latch=2)
pub_img.publish("savegeotiff")

#con1 = pub_img.get_num_connections()
#while not pub_img.get_num_connections() > con1:
#while  pub_img.get_num_connections() == 0:
 #   rate.sleep()

#os.system('rostopic pub -1 syscommand std_msgs/String "savegeotiff"')
print("creating png")
for img in glob.glob(tiff_path+"*.tif"):
    im_name = img.replace('tif', 'png')
    cv_img = cv2.imread(img)
    cv2.imwrite(im_name, cv_img)
print("removing old files")
os.system("ls -t "+tiff_path+"*tfw | tail -n +2 | xargs rm --")#remove all tfw but latest
os.system("ls -t "+tiff_path+"*tif | tail -n +2 | xargs rm --")#remove all tif but latest
os.system("ls -t "+tiff_path+"*png | tail -n +2 | xargs rm --")#remove all png but latest

#ros_nodes = rosnode.get_node_names()
