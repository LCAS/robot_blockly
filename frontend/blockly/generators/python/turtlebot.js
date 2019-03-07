0/**
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

goog.provide('Blockly.Python.turtlebot');
goog.require('Blockly.Python');


Blockly.Python['turtle_move_forwards'] = function(block) {
    var varName = Blockly.Python.valueToCode(block, 'velocity', Blockly.Python.ORDER_ATOMIC);

    var code = "vel = " + varName + "\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot/turtle_move_forwards.py");
    return code
}

Blockly.Python['turtle_move_backwards'] = function(block) {
    var varName = Blockly.Python.valueToCode(block, 'velocity', Blockly.Python.ORDER_ATOMIC);

    var code = "vel = " + varName + "\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot/turtle_move_backwards.py");
    return code
}

Blockly.Python['turtle_turn_left'] = function(block) {
    var varName = Blockly.Python.valueToCode(block, 'rotation', Blockly.Python.ORDER_ATOMIC);

    var code = "rotation = " + varName + "\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot/turtle_turn_left.py");
    return code
}

Blockly.Python['turtle_turn_right'] = function(block) {
    var varName = Blockly.Python.valueToCode(block, 'rotation', Blockly.Python.ORDER_ATOMIC);

    var code = "rotation = " + varName + "\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot/turtle_turn_right.py");
    return code
}

Blockly.Python['turtle_sleep'] = function(block) {
    var varName = Blockly.Python.valueToCode(block, 'sleep', Blockly.Python.ORDER_ATOMIC);

    var code = "sleep_time = " + varName + "\n";
    code += "rospy.sleep(sleep_time)\n";
    return code        
};

Blockly.Python['turtle_distance_middle'] = function(block) {
    return [
        "numpy.nanmin(rospy.wait_for_message('/scan', LaserScan, timeout=2).ranges[50:589])",
        Blockly.Python.ORDER_ADDITION];
};

Blockly.Python['turtle_distance_left'] = function(block) {
    return [
        "numpy.nanmin(rospy.wait_for_message('/scan', LaserScan, timeout=2).ranges[0:49])",
        Blockly.Python.ORDER_ADDITION];
};

Blockly.Python['turtle_distance_right'] = function(block) {
    return [
        "numpy.nanmin(rospy.wait_for_message('/scan', LaserScan, timeout=2).ranges[590:639])",
        Blockly.Python.ORDER_ADDITION];
};

Blockly.Python['turtle_distance_all'] = function(block) {
    return [
        "numpy.nanmin(rospy.wait_for_message('/scan', LaserScan, timeout=2).ranges[:])",
        Blockly.Python.ORDER_ADDITION];
};
