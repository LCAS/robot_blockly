#!/bin/bash
# script to launch blockly server for turtlebot
# P. Baxter, L-CAS, UoL, 02/2018

# echo ros | sudo -s -S -H -u turtlebot 

gnome-terminal -e 'bash -c "source /opt/ros/indigo/setup.bash; roslaunch uol_turtlebot_common turtlebot.launch"' &

# ?!?!?
sleep 10

gnome-terminal -e 'bash -c "source /home/computing/schools/devel/setup.bash; roslaunch robot_blockly robot_blockly.launch"' &
