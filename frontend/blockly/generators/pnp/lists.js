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
 * @fileoverview Generating PNP for list blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.PNP.lists');

goog.require('Blockly.PNP');


Blockly.PNP['lists_create_empty'] = function(block) {
  // Create an empty list.
  return ['', Blockly.PNP.ORDER_ATOMIC];
};

Blockly.PNP['lists_create_with'] = function(block) {
  // Create a list with any number of elements of any type.
  var code = new Array(block.itemCount_);
  for (var n = 0; n < block.itemCount_; n++) {
    code[n] = Blockly.PNP.valueToCode(block, 'ADD' + n,
        Blockly.PNP.ORDER_NONE) || 'None';
  }
  code = code.join('_') ;
  return [code, Blockly.PNP.ORDER_ATOMIC];
};

