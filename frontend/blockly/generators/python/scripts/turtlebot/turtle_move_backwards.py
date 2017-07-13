import rospy
import time
from geometry_msgs.msg import Twist

#maximum speed check!
if vel > 2:
    vel = 2
elif vel < 0:
    vel = 0

t = Twist()
t.linear.x = -vel
publisher.publish(t)

time.sleep(1)
