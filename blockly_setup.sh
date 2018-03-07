#!/bin/bash
# script to setup files etc for blockly on turtlebot
# M. Hanheide (new), P. Baxter (old), L-CAS, UoL, 02/2018

### OLD way

echo "setting up autolaunch of tmule on turtlebot..."

#assuming installation has occured, copy setup script and change permission
#echo ros | sudo -s -S -H -u turtlebot cp -v /home/computing/schools/src/robot_blockly/blockly_launch.sh /home/turtlebot/Desktop/blockly_launch.sh
#echo ros | sudo -s -S -H -u turtlebot chmod -v +x /home/turtlebot/Desktop/blockly_launch.sh

#setup the autostart
#echo ros | sudo -s -S -H -u turtlebot mkdir -p /home/turtlebot/.config/autostart
#echo ros | sudo -s -S -H -u turtlebot cp -v /home/computing/schools/src/robot_blockly/turtlebot_blockly.desktop /home/turtlebot/.config/autostart/turtlebot_blockly.desktop

### NEW way

sudo apt-get update
sudo apt-get -y install supervisor tmux nmap
sudo pip2 install -U tmule

cp -v tmule.yaml $HOME
sudo cp -v supervisor/conf.d/tmule.conf /etc/supervisor/conf.d/tmule.conf

sudo service supervisor restart

echo "setting up crontab task..."

crontab iptracker.cron

./iptracker.sh

### Setup for new network method, launching new terminal for wicd-curses in process

echo "setup for networking..."

# allow users 'turtlebot' and 'computing' to have access
sudo apt-get -y install wicd-curses wicd-gtk wicd-daemon
sudo apt-get -y purge network-manager

sudo /etc/init.d/wicd start
gnome-terminal -e 'bash -c "wicd-curses"' &

echo "...done"
