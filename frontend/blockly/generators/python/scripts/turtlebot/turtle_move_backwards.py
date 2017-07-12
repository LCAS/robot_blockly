import rospy
import time
from geometry_msgs.msg import Twist

publisher = rospy.Publisher("/mobile_base/commands/velocity", Twist, queue_size=1)

#maximum speed check!
if vel > 2:
    vel = 2
elif vel < 0:
    vel = 0

t = Twist()
t.linear.x = -vel
publisher.publish(t)

time.sleep(1)
