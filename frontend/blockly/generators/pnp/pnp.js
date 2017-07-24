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
    var param = block.getFieldValue('param');
    var code = name;
    if (param) {
    		code = code + "_" + param;	
    }

    //code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot/turtle_move_forwards.py");
    return code;
}

Blockly.PNP['pnp_action'] = function(block) {
	  var actName = block.getFieldValue('action');

    var code = pnpgen_action_string(actName, block) + "; ";
    return code;
}

Blockly.PNP['pnp_free_action'] = function(block) {
    var actName = block.getFieldValue('action');

    var code = pnpgen_action_string(actName, block) + "; ";
    return code;
}

Blockly.PNP['pnp_condition'] = function(block) {
	  var condName = block.getFieldValue('condition');
    return [pnpgen_action_string(condName, block), 0];
}

Blockly.PNP['pnp_free_condition'] = function(block) {
    var condName = block.getFieldValue('condition');
    return [pnpgen_action_string(condName, block), 0];
}

Blockly.PNP['pnp_er'] = function(block) {
    console.log('ER');
    var condition = Blockly.PNP.valueToCode(block, 'IF0',
        Blockly.PNP.ORDER_NONE) || '';
    var branch = Blockly.PNP.statementToCode(block, 'DO0') ||
        '';
    var during = block.getFieldValue('during');
    var code = '\n'
              + '*if* ' + condition 
              + ' *during* ' + during
              + ' *do* ' + branch;
    return code;
}

Blockly.PNP['pnp_comment'] = function(block) {
    var c = block.getFieldValue('comment');
    return '# ' + c + '\n';
}

Blockly.PNP['pnp_controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.PNP.valueToCode(block, 'IF' + n,
      Blockly.PNP.ORDER_NONE) || '';
  var branch = Blockly.PNP.statementToCode(block, 'DO' + n) ||
      '';
  var code = '\n< ';
  code += argument +  '?' + rstrip_sc(branch) + ' ';
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.PNP.valueToCode(block, 'IF' + n,
        Blockly.PNP.ORDER_NONE) || '';
    branch = Blockly.PNP.statementToCode(block, 'DO' + n) ||
        '';
    code += '\n  : ' + argument + '?' + rstrip_sc(branch) + ' ';
  }
  if (block.elseCount_) {
    branch = Blockly.PNP.statementToCode(block, 'ELSE') ||
        '';
    code += '\n  : (NOT ' + argument + ')?' + rstrip_sc(branch) + ' ';
  }
  return rstrip_sc(code) + " \n>;\n";
};

Blockly.PNP['logic_negate'] = function(block) {
  // Negation.
  var argument0 = Blockly.PNP.valueToCode(block, 'BOOL',
      Blockly.PNP.ORDER_LOGICAL_NOT) || '';
  var code = '(not ' + argument0 + ')';
  return [code, Blockly.PNP.ORDER_LOGICAL_NOT];
};

Blockly.PNP['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? 'and' : 'or';
  var order = (operator == 'and') ? Blockly.PNP.ORDER_LOGICAL_AND :
      Blockly.PNP.ORDER_LOGICAL_OR;
  var argument0 = Blockly.PNP.valueToCode(block, 'A', order);
  var argument1 = Blockly.PNP.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'False';
    argument1 = 'False';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == 'and') ? 'True' : 'False';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = '(' + operator + ' ' + argument0 + ' ' + argument1 + ')';
  return [code, order];
};
