/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import './index.css';
import * as Blockly from 'blockly';
import {blocks, blocksDefinitions} from './blocks';
import { ergoScriptGenerator } from './ergoscript';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');

export const toolbox = {
  contents: blocksDefinitions.map(b =>({
    kind: 'block',
    type: b.type,
  }))
};
const ws = Blockly.inject(blocklyDiv, {toolbox});

const runCode = () => {
  const code = ergoScriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
};

runCode();


ws.addChangeListener((e) => {
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});
