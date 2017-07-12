/**
 * @license
 *
 * Copyright 2015 Erle Robotics
 * http://erlerobotics.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for Erle-Spider.
 * @author victor@erlerobot.com (Víctor Mayoral Vilches)
 * @author ahcorde@erlerobot.com (Alejandro Hernández Cordero)
*/
'use strict';

goog.provide('Blockly.Blocks.turtlebot');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.brain.HUE = 260;


Blockly.Blocks['turtle_move_forwards'] = {
    init: function() {
        this.appendValueInput("velocity")
            .appendField("Forward Speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip('move forwards with this speed');
        this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
    }
};

Blockly.Blocks['turtle_move_backwards'] = {
    init: function() {
        this.appendValueInput("velocity")
            .appendField("Backward Speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip('move backwards with this speed');
        this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
    }
};

Blockly.Blocks['turtle_turn_left'] = {
    init: function() {
        this.appendValueInput("rotation")
            .appendField("Rotation Left Speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip('turn left with this speed');
        this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
    }
};

Blockly.Blocks['turtle_turn_right'] = {
    init: function() {
        this.appendValueInput("rotation")
            .appendField("Rotation Right Speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip('turn right with this speed');
        this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
    }
};

Blockly.Blocks['turtle_distance_middle'] = {
  init: function() {
    this.appendValueInput("middledistance")
        .appendField("Laser Distance Middle");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('this is the middle distance value');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Tutorials/Tutorial_1_Erle-Brain_Erle_Lidar_laser.html');
  }
};

Blockly.Blocks['turtle_distance_left'] = {
  init: function() {
    this.appendValueInput("leftdistance")
        .appendField("Laser Distance Left");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('this is the left distance value');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Tutorials/Tutorial_1_Erle-Brain_Erle_Lidar_laser.html');
  }
};

Blockly.Blocks['turtle_distance_right'] = {
  init: function() {
    this.appendValueInput("rightdistance")
        .appendField("Laser Distance Right");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('this is the right distance value');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Tutorials/Tutorial_1_Erle-Brain_Erle_Lidar_laser.html');
  }
};
