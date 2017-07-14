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
 * @fileoverview Helper functions for generating PNP for blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.PNP');

goog.require('Blockly.Generator');


/**
 * PNP code generator.
 * @type {!Blockly.Generator}
 */
Blockly.PNP = new Blockly.Generator('PNP');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.PNP.addReservedWords(
    // import keyword
    // print ','.join(keyword.kwlist)
    // http://docs.python.org/reference/lexical_analysis.html#keywords
    'and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,not,or,pass,print,raise,return,try,while,with,yield,' +
    //http://docs.python.org/library/constants.html
    'True,False,None,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,' +
    // http://docs.python.org/library/functions.html
    'abs,divmod,input,open,staticmethod,all,enumerate,int,ord,str,any,eval,isinstance,pow,sum,basestring,execfile,issubclass,print,super,bin,file,iter,property,tuple,bool,filter,len,range,type,bytearray,float,list,raw_input,unichr,callable,format,locals,reduce,unicode,chr,frozenset,long,reload,vars,classmethod,getattr,map,repr,xrange,cmp,globals,max,reversed,zip,compile,hasattr,memoryview,round,__import__,complex,hash,min,set,apply,delattr,help,next,setattr,buffer,dict,hex,object,slice,coerce,dir,id,oct,sorted,intern');


/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.PNP.init = function(workspace) {
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.PNP.finish = function(code) {
  return code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.PNP.scrubNakedValue = function(line) {
  return line + '\n';
};

Blockly.PNP.scrub_ = function(block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.PNP.blockToCode(nextBlock);
  return code + nextCode;
};


/**
 * Encode a string as a properly escaped PNP string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} PNP string.
 * @private
 */
Blockly.PNP.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\%/g, '\\%')
                 .replace(/'/g, '\\\'');
  return '' + string + '';
};

/**
 * Order of operation ENUMs.
 * http://docs.python.org/reference/expressions.html#summary
 */
Blockly.PNP.ORDER_ATOMIC = 0;            // 0 "" ...
Blockly.PNP.ORDER_COLLECTION = 1;        // tuples, lists, dictionaries
Blockly.PNP.ORDER_STRING_CONVERSION = 1; // `expression...`
Blockly.PNP.ORDER_MEMBER = 2;            // . []
Blockly.PNP.ORDER_FUNCTION_CALL = 2;     // ()
Blockly.PNP.ORDER_EXPONENTIATION = 3;    // **
Blockly.PNP.ORDER_UNARY_SIGN = 4;        // + -
Blockly.PNP.ORDER_BITWISE_NOT = 4;       // ~
Blockly.PNP.ORDER_MULTIPLICATIVE = 5;    // * / // %
Blockly.PNP.ORDER_ADDITIVE = 6;          // + -
Blockly.PNP.ORDER_BITWISE_SHIFT = 7;     // << >>
Blockly.PNP.ORDER_BITWISE_AND = 8;       // &
Blockly.PNP.ORDER_BITWISE_XOR = 9;       // ^
Blockly.PNP.ORDER_BITWISE_OR = 10;       // |
Blockly.PNP.ORDER_RELATIONAL = 11;       // in, not in, is, is not,
                                            //     <, <=, >, >=, <>, !=, ==
Blockly.PNP.ORDER_LOGICAL_NOT = 12;      // not
Blockly.PNP.ORDER_LOGICAL_AND = 13;      // and
Blockly.PNP.ORDER_LOGICAL_OR = 14;       // or
Blockly.PNP.ORDER_CONDITIONAL = 15;      // if else
Blockly.PNP.ORDER_LAMBDA = 16;           // lambda
Blockly.PNP.ORDER_NONE = 99;             // (...)
