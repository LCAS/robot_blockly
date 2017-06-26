import rospy
import math
import time
from crab_msgs.msg import apm_imu
from crab_msgs.msg import BodyCommand
from crab_msgs.msg import BodyState
from crab_msgs.msg import GaitCommand
from crab_msgs.msg import LegIKRequest
from crab_msgs.msg import LegJointsState
from crab_msgs.msg import LegPositionState
from crab_msgs.msg import LegsJointsState
from sensor_msgs.msg import Joy
from geometry_msgs.msg import PoseStamped


pub = rospy.Publisher('/joy', Joy, queue_size=10)
msg = Joy()
rate = rospy.Rate(10)
   
valueAxe = 0.0
valueButton = 0
for i in range (0, 20):
 msg.axes.append(valueAxe)
for e in range (0, 17):
 msg.buttons.append(valueButton)

poseStamped = rospy.wait_for_message('/slam_out_pose', PoseStamped, timeout=10)

start_x = poseStamped.pose.position.x
start_y = poseStamped.pose.position.y
start_z = poseStamped.pose.position.z

if "forward" is dropdown_direction:
 msg.axes[1] = 1
elif "backwards" is dropdown_direction:
 msg.axes[1] = -1
elif "left" is dropdown_direction:
 msg.axes[0] = 1
elif "right" is dropdown_direction:
 msg.axes[0] = -1

bo=True
while not rospy.is_shutdown() and bo:
    poseStamped = rospy.wait_for_message('/slam_out_pose', PoseStamped, timeout=3)

    current_x = poseStamped.pose.position.x
    current_y = poseStamped.pose.position.y
    current_z = poseStamped.pose.position.z

    d_x = (current_x - start_x)**2
    d_y = (current_y - start_y)**2
    d_z = (current_z - start_z)**2

    #d=srqt((x2-x1)**2+(y2-y1)**2+(z2-z1)**2)
    distance_3d = math.sqrt(d_x + d_y + d_z)

    print("\n")
    print(meters)
    print(distance_3d)

    if (distance_3d > meters):
        bo=False
        msg.axes[0] = 0
        msg.axes[1] = 0
    pub.publish(msg)
    rate.sleep()
