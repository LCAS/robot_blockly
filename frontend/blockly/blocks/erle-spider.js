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
 */
'use strict';

goog.provide('Blockly.Blocks.spider');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.spider.HUE = 260;


Blockly.Blocks['spider_standup_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stand up/down");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['spider_walk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Walk ")
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backwards", "backwards"], ["Left", "left"], ["Right", "right"]]), "direction")
        .appendField(new Blockly.FieldTextInput("1"), "WALK_SECS")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['spider_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn ")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "direction")
        .appendField(new Blockly.FieldTextInput("1"), "TURN_SECS")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['spider_turn_degrees'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn ")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "direction")
    this.appendValueInput("TURN_DEGREES")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees");   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Tutorials/Tutorial_2_Erle-Spider_Turn_degrees_block.html');
  }
};

Blockly.Blocks['spider_walk_meters'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Walk ")
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backwards", "backwards"], ["Left", "left"], ["Right", "right"]]), "direction")
    this.appendValueInput("METERS")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("meters");   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Tutorials/Tutorial_2_Erle-Spider_Turn_degrees_block.html');
  }
};
