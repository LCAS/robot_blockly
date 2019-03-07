import rospy
import time
from geometry_msgs.msg import Twist

#maximum speed check!
if rotation > 6:
    rotation = 6
elif rotation < 0:
    rotation = 0

t = Twist()
t.angular.z = rotation
publisher.publish(t)

rospy.sleep(.01)
