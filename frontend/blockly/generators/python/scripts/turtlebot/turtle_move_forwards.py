import rospy
from geometry_msgs.msg import Twist
publisher = rospy.Publisher("/mobile_base/commands/velocity", Twist, queue_size=1)

t = Twist()
t.linear.x = vel
publisher.publish(t)
