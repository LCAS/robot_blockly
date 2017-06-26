import rospy
import subprocess
import rosnode
from sensor_msgs.msg import Imu
import sys
from crab_msgs.msg import apm_imu
from crab_msgs.msg import BodyCommand
from crab_msgs.msg import BodyState
from crab_msgs.msg import GaitCommand
from crab_msgs.msg import LegIKRequest
from crab_msgs.msg import LegJointsState
from crab_msgs.msg import LegPositionState
from crab_msgs.msg import LegsJointsState
from sensor_msgs.msg import Joy

msg_imu = rospy.wait_for_message('/imu9250', Imu, timeout=3)

quaternion = (
msg_imu.orientation.w,
msg_imu.orientation.x,
msg_imu.orientation.y,
msg_imu.orientation.z)

euler = euler_from_quaternion(quaternion)
initial_yaw = abs(math.degrees(euler[2]))

################
## INITIALIZE ##
################
pub = rospy.Publisher('/joy', Joy, queue_size=10)
msg = Joy()
msg.header.stamp = rospy.Time.now()
rate = rospy.Rate(10)

valueAxe = 0.0
valueButton = 0
for i in range (0, 20):
    msg.axes.append(valueAxe)
for e in range (0, 17):
    msg.buttons.append(valueButton)

##########################
## TURN RIGHT n DEGREES ##
##########################

bo=True
previous_yaw = initial_yaw
loop = 0
degrees_change = 0


if "left" is dropdown_direction:
 msg.axes[2] = 1
 target = float(degrees)*0.95
elif "right" is dropdown_direction:
 msg.axes[2] = -1
 target = float(degrees)*1.05

while not rospy.is_shutdown() and bo:
    msg_imu = rospy.wait_for_message('/imu9250', Imu, timeout=5)
    quaternion = (
    msg_imu.orientation.w,
    msg_imu.orientation.x,
    msg_imu.orientation.y,
    msg_imu.orientation.z)

    euler = euler_from_quaternion(quaternion)
    yaw = euler[2]
    yaw = math.degrees(yaw)
    yaw = abs(yaw)

    degrees_change += abs(previous_yaw - yaw)

    if (degrees_change >= target):
        bo=False
        msg.axes[2] = 0
    previous_yaw = yaw
    pub.publish(msg)
    rate.sleep()
