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

goog.provide('Blockly.Blocks.pnp');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.pnp.HUE = 260;


// generated actions with
// ls -1 ../spqrel_tools/actions/*.py | cut -f4 -d/ | cut -f1 -d. | sed 's/^\(.*\)$/["\1", "\1"],/'

Blockly.Blocks.pnp.known_pnp_actions = [
    ["action_cmd", "action_cmd"],
    ["asrenable", "asrenable"],
    ["dialogue", "dialogue"],
    ["dialoguestart", "dialoguestart"],
    ["dialoguestop", "dialoguestop"],
    ["dooropen", "dooropen"],
    ["enter", "enter"],
    ["execplan", "execplan"],
    ["followuntil", "followuntil"],
    ["goto", "goto"],
    ["headpose", "headpose"],
    ["init_actions", "init_actions"],
    ["lookfor", "lookfor"],
    ["memorizeface", "memorizeface"],
    ["memorizepeople", "memorizepeople"],
    ["movementdetected", "movementdetected"],
    ["navigate_to", "navigate_to"],
    ["obstaclehere", "obstaclehere"],
    ["personbehind", "personbehind"],
    ["persondetected", "persondetected"],
    ["personhere", "personhere"],
    ["personsitting", "personsitting"],
    ["posture", "posture"],
    ["saveposition", "saveposition"],
    ["say", "say"],
    ["screentouched", "screentouched"],
    ["soundtrack", "soundtrack"],
    ["speechbtn", "speechbtn"],
    ["trackface", "trackface"],
    ["turn", "turn"],
    ["utils", "utils"],
    ["vsay", "vsay"],
    ["waitfor", "waitfor"],
    ["wait", "wait"],
    ["webpage", "webpage"]
];

//generated conditions with 
// find ../spqrel_tools/ -name *.py | xargs -- grep 'set_condition(' ../spqrel_tools/actions/*.py | sed "s/.*set_condition.*,\(.*\),.*$/[\1, \1],/" | sort | uniq


Blockly.Blocks.pnp.known_pnp_conditions = [
    ['closetotarget', 'closetotarget'],
    ['closeto', 'closeto'],
    ['dooropen', 'dooropen'],
    ['movementdetected', 'movementdetected'],
    ['obstaclehere', 'obstaclehere'],
    ['pathnotfound', 'pathnotfound'],
    ['personbehind', 'personbehind'],
    ['persondetected', 'persondetected'],
    ['personhere', 'personhere'],
    ['personsitting', 'personsitting'],
    ['screentouched', 'screentouched'],
    ['stopfollowing',  'stopfollowing']
];

function pnpblock_action_string(obj, name) {
    obj.appendValueInput("param")
        .appendField(name);
    obj.setInputsInline(true);
    obj.setPreviousStatement(true);
    obj.setNextStatement(true);
    obj.setColour(0);
}


Blockly.Blocks['pnp_free_action'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("action")
            .appendField(new Blockly.FieldTextInput('action'),
                     'action');
        this.appendDummyInput()
            .appendField("params")
            .appendField(new Blockly.FieldTextInput(''),
                     'param');

        // this.appendValueInput("param")
        //     .appendField("param");
        // this.appendValueInput("ER")
        //     .appendField("ER");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(100);
    }
};

Blockly.Blocks['pnp_action'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("action")
            .appendField(new Blockly.FieldDropdown(
                  Blockly.Blocks.pnp.known_pnp_actions
                ),
                'action');
        this.appendDummyInput()
            .appendField("params")
            .appendField(new Blockly.FieldTextInput(''),
                     'param');

        // this.appendValueInput("param")
        //     .appendField("param");
        // this.appendValueInput("ER")
        //     .appendField("ER");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(100);
    }
};


Blockly.Blocks['pnp_free_condition'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("condition")
            .appendField(new Blockly.FieldTextInput('person_near'),
                     'condition');
        this.appendDummyInput()
            .appendField("params")
            .appendField(new Blockly.FieldTextInput(''),
                     'param');
        this.setOutput(true, 'Boolean');
        this.setInputsInline(true);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setColour(10);
    }
};

Blockly.Blocks['pnp_condition'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("condition")
            .appendField(new Blockly.FieldDropdown(
                  Blockly.Blocks.pnp.known_pnp_conditions
                ),
                'condition');
        this.appendDummyInput()
            .appendField("params")
            .appendField(new Blockly.FieldTextInput(''),
                     'param');
        this.setOutput(true, 'Boolean');
        this.setInputsInline(true);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setColour(10);
    }
};



Blockly.Blocks['pnp_goto'] = {
    init: function() {
        pnpblock_action_string(this, 'goto');
    }
};

Blockly.Blocks['pnp_say'] = {
    init: function() {
        pnpblock_action_string(this, 'say');
    }
};


Blockly.Blocks['pnp_controls_if'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColour(Blockly.Blocks.pnp.HUE);
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendStatementInput('DO0')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['controls_if_elseif']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
      } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
      } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
      } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('controls_if_if');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('controls_if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = workspace.newBlock('controls_if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'controls_if_else':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
    Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'controls_if_else':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
          .setCheck('Boolean')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
      this.appendStatementInput('DO' + i)
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    }
    if (this.elseCount_) {
      this.appendStatementInput('ELSE')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    }
  }
};

Blockly.Blocks['pnp_comment'] = {
  init: function() {
    this.setColour('#AAAAAA');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('comment'), 'comment')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
  }
};

Blockly.Blocks['pnp_er'] = {
  init: function() {
    this.setColour('#AAAAFF');
    this.appendDummyInput()
        .appendField('ER');
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField('if');
    this.appendDummyInput()
        .appendField("during")
            .appendField(new Blockly.FieldDropdown(
                  Blockly.Blocks.pnp.known_pnp_actions
                ),
                'during');
    // this.appendValueInput('DURING')
    //     .appendField('*during*');
    this.appendStatementInput('DO0')
        .appendField('do');
    this.setPreviousStatement(false);
    this.setNextStatement(false);


    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldTextInput(''), 'if')
    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldTextInput(''), 'during')
    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldTextInput(''), 'during')
    // this.setOutput(true, 'String');
    // Assign 'this' to a variable for use in the tooltip closure below.
  }
};
//*if* personhere *during* goto *do* say_hello; waitfor_not_personhere; restart_action


/*
Blockly.Blocks['turtle_move_backwards'] = {
    init: function() {
        this.appendValueInput("velocity")
            .appendField("Backward Speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip('move backwards with this speed');
        this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
    }
};

Blockly.Blocks['turtle_turn_left'] = {
    init: function() {
        this.appendValueInput("rotation")
            .appendField("Rotation Left Speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip('turn left with this speed');
        this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
    }
};

Blockly.Blocks['turtle_turn_right'] = {
    init: function() {
        this.appendValueInput("rotation")
            .appendField("Rotation Right Speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip('turn right with this speed');
        this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
    }
};

Blockly.Blocks['turtle_distance_middle'] = {
  init: function() {
    this.appendValueInput("middledistance")
        .appendField("Laser Distance Middle");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('this is the middle distance value');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Tutorials/Tutorial_1_Erle-Brain_Erle_Lidar_laser.html');
  }
};

Blockly.Blocks['turtle_distance_left'] = {
  init: function() {
    this.appendValueInput("leftdistance")
        .appendField("Laser Distance Left");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('this is the left distance value');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Tutorials/Tutorial_1_Erle-Brain_Erle_Lidar_laser.html');
  }
};

Blockly.Blocks['turtle_distance_right'] = {
  init: function() {
    this.appendValueInput("rightdistance")
        .appendField("Laser Distance Right");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('this is the right distance value');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Tutorials/Tutorial_1_Erle-Brain_Erle_Lidar_laser.html');
  }
};
*/