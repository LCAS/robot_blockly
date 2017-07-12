import numpy
import rospy
from sensor_msgs.msg import LaserScan

distance_data = wait_for_message('/turtlebot/scan', LaserScan, timeout=2)

distance_middle = numpy.nanmean(distance_data[300:340])

# use range 0:40 for left and 600:639 for right
