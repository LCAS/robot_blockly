import rospy
import time
from geometry_msgs.msg import Twist

#maximum speed check!
if rotation > 2:
    rotation = 2
elif rotation < 0:
    rotation = 0

t = Twist()
t.angular.z = -rotation
publisher.publish(t)

time.sleep(1)
