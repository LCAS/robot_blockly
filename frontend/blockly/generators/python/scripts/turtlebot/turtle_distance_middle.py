import numpy
import rospy
from sensor_msgs.msg import LaserScan

distance_data = rospy.wait_for_message('/scan', LaserScan, timeout=5)

distance_middle = numpy.nanmean(distance_data.ranges[300:340], dtype='float64')

# use range 0:40 for left and 600:639 for right
