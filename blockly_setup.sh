#!/bin/bash
# script to setup files etc for blockly on turtlebot
# P. Baxter, L-CAS, UoL, 02/2018

echo "setting up autolaunch for blockly on turtlebot..."

#assuming installation has occured, copy setup script and change permission
cp -v /home/computing/schools/src/robot_blockly/blockly_launch.sh /home/turtlebot/Desktop/blockly_launch.sh
sudo chmod -v +x /home/turtlebot/Desktop/blockly_launch.sh

#setup the autostart
cp -v /home/computing/schools/src/robot_blockly/turtlebot_blockly.desktop /home/turtlebot/.config/autostart/turtlebot_blockly.desktop

echo "done..."
