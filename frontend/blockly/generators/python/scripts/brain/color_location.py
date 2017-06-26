# Python libs
import sys, time

# numpy and scipy
import numpy as np
from scipy.ndimage import filters

# OpenCV
import cv2

# Ros libraries
import roslib
import rospy

# Ros Messages
from sensor_msgs.msg import CompressedImage

#colorBGR to Boundaries
B = colorBGR.split(',')[0]
G = colorBGR.split(',')[1]
R = colorBGR.split(',')[2]

boundary = 70 #calibrate depending on the amout of light
B_low = int(B)-boundary
G_low = int(G)-boundary
R_low = int(R)-boundary
B_up = int(B)+boundary
G_up = int(G)+boundary
R_up = int(R)+boundary

if B_low < 0:B_low=0
if G_low < 0:G_low=0
if R_low < 0:R_low=0
if B_up > 255:B_up=255
if G_up > 255:G_up=255
if R_up > 255:R_up=255

ros_nodes = rosnode.get_node_names()
if '/raspicam_node' in ros_nodes:
    command='rosservice call /camera/start_capture'
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
else:
    command='/home/erle/ros_catkin_ws/install_isolated/camera.sh'
    command+=';rosservice call /camera/start_capture'
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)

ros_data = rospy.wait_for_message('/camera/image/compressed', CompressedImage, timeout=5)

#### direct conversion to CV2 ####
np_arr = np.fromstring(ros_data.data, np.uint8)
image = cv2.imdecode(np_arr, 1) #cv2.CV_LOAD_IMAGE_COLOR

# define the list of boundaries in BGR
boundaries = [([B_low,G_low,R_low],[B_up,G_up,R_up])]
print(boundaries)

# loop over the boundaries
for (lower, upper) in boundaries:
    # create NumPy arrays from the boundaries
    lower = np.array(lower, dtype = "uint8")
    upper = np.array(upper, dtype = "uint8")

    # find the colors within the specified boundaries and apply
    # the mask
    mask = cv2.inRange(image, lower, upper)
    output = cv2.bitwise_and(image, image, mask = mask)

cvImg = cv2.cvtColor(output, 6) #cv2.COLOR_BGR2GRAY
npImg = np.asarray( cvImg )

coordList = np.argwhere( npImg >0 )
numWhitePoints = len( coordList )

if numWhitePoints > 2000: #lower limit
    X=0;Y=0
    for (x,y) in coordList:
        X+=x
        Y+=y

    height = np.size(cvImg, 0)
    width = np.size(cvImg, 1)

    X_C = int(X/numWhitePoints)
    Y_C = int(Y/numWhitePoints)

    X_center=Y_C;Y_center=X_C #fix axes	

    #DEBUG# Write the image with a circle in the center of the color.
    #DEBUG# print("Center point: "+str(X_center)+","+str(Y_center))
    #DEBUG# cv2.circle(image,(X_center,Y_center), 20, (0,255,0), -1)
    #DEBUG# cv2.imwrite("image_center.jpg", image);

    ##### PRINT LOCATION #####
    #print("Image height="+str(height)+", Image width="+str(width))

    if X_center >= width/2: # RIGHT from 0 to +10
        color_location = ((X_center - (width/2))*10)/(width/2)
    else: #LEFT from 0 to -10
        Xnew_center = (width/2) - X_center
        color_location = (-1)*((Xnew_center)*10)/(width/2)

else:
    print("Not enough sample color")
    color_location = None
    #DEBUG# Write the image
    #DEBUG# cv2.imwrite("image_NO_center.jpg", image);

command="rosservice call /camera/stop_capture"
process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
