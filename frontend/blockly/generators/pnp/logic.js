/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview Generating PNP for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.PNP.logic');

goog.require('Blockly.PNP');



// Blockly.PNP['pnp_controls_if'] = function(block) {
//   // If/elseif/else condition.
//   var n = 0;
//   var argument = Blockly.PNP.valueToCode(block, 'IF' + n,
//       Blockly.PNP.ORDER_NONE) || '';
//   var branch = Blockly.PNP.statementToCode(block, 'DO' + n) ||
//       Blockly.PNP.PASS;
//   var code = '< ' + argument + '?' + branch;
//   if (block.elseCount_) {
//     branch = Blockly.PNP.statementToCode(block, 'ELSE') ||
//         Blockly.PNP.PASS;
//     code += ': (' + argument + ')?' + branch;
//   }
//   return code;
// };

