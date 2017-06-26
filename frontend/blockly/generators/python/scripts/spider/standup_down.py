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
   
standup_time=20

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


####################
## STAND UP    ##
####################
msg.buttons[3] = 1
i=0
bo=True
standup_time=standup_time/3
while not rospy.is_shutdown() and bo:
 i=i+1
 if (i>standup_time):
   bo=False
   msg.buttons[3] = 0
 pub.publish(msg)
 rate.sleep()
time.sleep(2)
