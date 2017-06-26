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
 * @fileoverview Blocks for Erle-Rover.
 * @author inigo@erlerobot.com (Iñigo Muguruza)
 */
'use strict';

goog.provide('Blockly.Blocks.rover');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.rover.HUE = 260;

Blockly.Blocks['rover_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["MANUAL mode", "MANUAL"], ["LEARNING mode", "LEARNING"], ["AUTO mode", "AUTO"], ["STEERING mode", "STEERING"], ["HOLD mode", "HOLD"], ["GUIDED mode", "GUIDED"]]), "MODE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['rover_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["RIGHT", "RIGHT"], ["LEFT", "LEFT"], ["STRAIGHT", "STRAIGHT"]]), "direction")
        .appendField("Direction")
        .appendField(new Blockly.FieldDropdown([["SLOW", "SLOW"], ["NORMAL", "NORMAL"], ["FAST", "FAST"]]), "speed")
        .appendField("Speed");
    this.appendValueInput("seconds")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};
