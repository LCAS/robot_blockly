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

goog.provide('Blockly.Python.spider');
goog.require('Blockly.Python');

Blockly.Python['spider_standup_down'] = function(block) {  
        
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/spider/standup_down.py");
    return code;

};

Blockly.Python['spider_walk'] = function(block) {
    var seconds = block.getFieldValue('WALK_SECS');
    var dropdown_direction = block.getFieldValue('direction');
    var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);

    var code = "";
    code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
    code += "seconds = \"" + seconds.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/spider/walk.py");
    return code;

};

Blockly.Python['spider_turn'] = function(block) {
    var seconds = block.getFieldValue('TURN_SECS');
    var dropdown_direction = block.getFieldValue('direction');
    var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);

    var code = "";
    code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
    code += "seconds = \"" + seconds.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/spider/turn.py");
    return code;

};

Blockly.Python['spider_turn_degrees'] = function(block) {

    var dropdown_direction = block.getFieldValue('direction');
    var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);

    var degrees_direction = Blockly.Python.valueToCode(block, 'TURN_DEGREES', Blockly.Python.ORDER_ATOMIC);

    var code = "";
    code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
    code += "degrees = " + degrees_direction.toString() + "\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/spider/turn_degrees.py");
    return code;

};

Blockly.Python['spider_walk_meters'] = function(block) {

    var dropdown_direction = block.getFieldValue('direction');
    var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);

    var meters = Blockly.Python.valueToCode(block, 'METERS', Blockly.Python.ORDER_ATOMIC);

    var code = "";
    code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
    code += "meters = " + meters.toString() + "\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/spider/walk_meters.py");
    return code;

};
