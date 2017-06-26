import rospy
import time
from std_msgs.msg import String

def talker():
  pub = rospy.Publisher('/statusleds', String, queue_size=10)
  rate = rospy.Rate(10)
  start = time.time()
  flag=True #time flag
  led=orange_led
  if (led == 'TRUE'):
    msg = 'orange'
  else:
    msg = 'orange_off'
  while not rospy.is_shutdown() and flag:
    sample_time=time.time()
    if ((sample_time - start) > 1):
      flag=False
    pub.publish(msg)
    rate.sleep()
if __name__ == '__main__':
  talker()
