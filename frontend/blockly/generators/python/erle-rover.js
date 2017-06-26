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
 * @author inigo@erlerobot.com (Iñigo Muguruza Goenaga)
 */
'use strict';

goog.provide('Blockly.Python.rover');
goog.require('Blockly.Python');



Blockly.Python['rover_mode'] = function(block) {

  var dropdown_mode = block.getFieldValue('MODE')
  var code = "";
  code += "dropdown_mode = \"" + dropdown_mode.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/rover/mode.py");
  return code;

};

Blockly.Python['rover_control'] = function(block) {

  var dropdown_direction = block.getFieldValue('direction');
  var dropdown_speed = block.getFieldValue('speed');
  var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
  
  var code = "";
  code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
  code += "dropdown_speed = \"" + dropdown_speed.toString() + "\"\n";
  code += "value_seconds = \"" + value_seconds.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/rover/control.py");
  return code;

};
