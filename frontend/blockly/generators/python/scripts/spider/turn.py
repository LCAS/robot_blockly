import sys
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

#################
##    TURN     ##
#################
walking_time=float(seconds)+0.4 #manual time calibration

start = time.time()

if "left" is dropdown_direction:
 msg.axes[2] = 1
elif "right" is dropdown_direction:
 msg.axes[2] = -1

bo=True
while not rospy.is_shutdown() and bo:
 sample_time = time.time()
 if ((sample_time - start) > walking_time):
  bo=False
  msg.axes[2] = 0
 pub.publish(msg)
 rate.sleep()
