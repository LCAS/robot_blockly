import rospy
import time
from mavros_msgs.msg import OverrideRCIn
from mavros_msgs.srv import SetMode
throttle_channel=2
steer_channel=0

def talker():
 pub = rospy.Publisher('mavros/rc/override', OverrideRCIn, queue_size=10)
 r = rospy.Rate(10) #10hz
 msg = OverrideRCIn()
 start = time.time()
 speed=dropdown_speed
 exec_time=value_seconds
 flag=True #time flag
 if speed =='SLOW':
  msg.channels[throttle_channel]=1558
 elif speed =='NORMAL':
  msg.channels[throttle_channel]=1565
 elif speed == 'FAST':
  msg.channels[throttle_channel]=1570
 direction=dropdown_direction
 if direction =='STRAIGHT':
  msg.channels[steer_channel]=1385
 elif direction =='RIGHT':
  msg.channels[steer_channel]=1450
 elif direction == 'LEFT':
  msg.channels[steer_channel]=1300
 while not rospy.is_shutdown() and flag:
  sample_time=time.time()
  if ((sample_time - start) > float(exec_time)):
   flag=False
  rospy.loginfo(msg)
  pub.publish(msg)
  r.sleep()

if __name__ == '__main__':
 rospy.wait_for_service('/mavros/set_mode')
 change_mode = rospy.ServiceProxy('/mavros/set_mode', SetMode)
 resp1 = change_mode(custom_mode='manual')
 print (resp1)
 if 'True' in str(resp1):
  try:
   talker()
  except rospy.ROSInterruptException: pass
