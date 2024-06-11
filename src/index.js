import './index.css';
import * as Blockly from 'blockly';
import { ergoScriptGenerator, blocks } from './ergoscript';
import darkTheme from '@blockly/theme-dark';

Blockly.common.defineBlocks(
  Blockly.common.createBlockDefinitionsFromJsonArray(blocks)
);

const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');

export const toolbox = {
  contents: blocks.map(b => ({
    kind: 'block',
    type: b.type,
  }))
};

const ws = Blockly.inject(blocklyDiv, { toolbox, theme: darkTheme });

const runCode = () => {
  const code = ergoScriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
};

runCode();

ws.addChangeListener((e) => {
  if (
    e.isUiEvent ||
    e.type === Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});
