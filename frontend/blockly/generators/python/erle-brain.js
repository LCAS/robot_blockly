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

goog.provide('Blockly.Python.brain');
goog.require('Blockly.Python');

Blockly.Python['get_laser'] = function(block) {

    var varName = Blockly.Python.valueToCode(block, 'laser', Blockly.Python.ORDER_ATOMIC);

    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/brain/get_laser.py");
    return code + varName + " = msg_laser.range\n"

};

Blockly.Python['take_a_picture'] = function(block) {

    window.open(
        '/pages/images/imageViewer.html',
        '_blank' // <- This is what makes it open in a new window.
    );

    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/brain/take_a_picture.py");
    return code;

};

Blockly.Python['turn_on_blue_led'] = function(block) {

	var blue_led = block.getFieldValue('BLUE_LED');

    var code = "";
    code += "blue_led = \"" + blue_led.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/brain/blue_led.py");
    return code;

};

Blockly.Python['turn_on_orange_led'] = function(block) {

    var orange_led = block.getFieldValue('ORANGE_LED');

    var code = "";
    code += "orange_led = \"" + orange_led.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/brain/orange_led.py");
    return code;

};

Blockly.Python['calibrate_imu'] = function(block) {
    
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/brain/calibrate_imu.py");
    return code;

};

Blockly.Python['camera_color_location'] = function(block) {

    var color = block.getFieldValue('COLOR');
    var varName_location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);

    var hex = color.replace(/[^0-9A-F]/gi, '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    var colorBGR = [b, g, r].join();

    var code = "";
    code += "colorBGR = \"" + colorBGR.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/brain/color_location.py");
    return code + varName_location + " = color_location\n"

};

Blockly.Python['start_hokuyo_laser'] = function(block) {

    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/brain/start_hokuyo.py");
    return code;

};

Blockly.Python['start_sick_laser'] = function(block) {

    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/brain/start_sick.py");
    return code;

};

Blockly.Python['start_slam'] = function(block) {


    window.open(
        '/pages/maps/imageViewer.html',
        '_blank' // <- This is what makes it open in a new window.
    );
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/brain/start_slam.py");
    return code;

};

Blockly.Python['find_path'] = function(block) {

    var varName = Blockly.Python.valueToCode(block, 'path_angle', Blockly.Python.ORDER_ATOMIC);

    var code = "\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/brain/find_path.py");
    return code + varName + " = path_center_degrees\n"

};
