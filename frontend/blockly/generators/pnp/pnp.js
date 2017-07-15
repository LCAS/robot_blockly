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

goog.provide('Blockly.PNP.pnp');
goog.require('Blockly.PNP');

// < persondetected? approach_person :
//  (not persondetected)? say_comehere >;

function rstrip_sc(instr, chars) {
  return instr.replace(/[\n ;]*$/g,'');
}

function pnpgen_action_string(name, block) {
    var param = Blockly.PNP.valueToCode(block, 'param', 0);
    var code = name;
    if (param) {
    		code = code + "_" + param;	
    }

    //code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot/turtle_move_forwards.py");
    return code;
}

Blockly.PNP['pnp_action'] = function(block) {
	  var actName = block.getFieldValue('action');
    var er = Blockly.PNP.valueToCode(block, 'ER', 0);


    var code = pnpgen_action_string(actName, block) + ";";
    if (er) {
        code = code + " # er: " + er;  
    }

    return code + "\n";
}

Blockly.PNP['pnp_condition'] = function(block) {
	  var condName = block.getFieldValue('condition');
    return [pnpgen_action_string(condName, block), 0];
}

Blockly.PNP['pnp_comment'] = function(block) {
    var c = block.getFieldValue('comment');
    return '# ' + c + '\n';
}

Blockly.PNP['pnp_er'] = function(block) {
    var c = block.getFieldValue('er');
    return [c, 0];
}



Blockly.PNP['pnp_controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.PNP.valueToCode(block, 'IF' + n,
      Blockly.PNP.ORDER_NONE) || '';
  var branch = Blockly.PNP.statementToCode(block, 'DO' + n) ||
      '';
  var code = '< ';
  code += '(' + argument +  ') ?' + rstrip_sc(branch);
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.PNP.valueToCode(block, 'IF' + n,
        Blockly.PNP.ORDER_NONE) || '';
    branch = Blockly.PNP.statementToCode(block, 'DO' + n) ||
        '';
    code += ': (' + argument + ') ?' + rstrip_sc(branch);
  }
  if (block.elseCount_) {
    branch = Blockly.PNP.statementToCode(block, 'ELSE') ||
        '';
    code += ': (NOT ' + argument + ') ?' + rstrip_sc(branch);
  }
  return code + " >;\n";
};