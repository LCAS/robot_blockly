import rospy
from mavros_msgs.srv import SetMode
rospy.wait_for_service('/mavros/set_mode')
change_mode = rospy.ServiceProxy('/mavros/set_mode', SetMode)
mode=dropdown_mode
resp1 = change_mode(0,mode)
