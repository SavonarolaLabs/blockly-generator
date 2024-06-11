import * as Blockly from 'blockly/core';

export const ergoScriptGenerator = new Blockly.Generator('ErgoScript');

ergoScriptGenerator.ORDER_ATOMIC =  0;
ergoScriptGenerator.ORDER_LOGICAL_AND =1;
ergoScriptGenerator.ORDER_LOGICAL_OR =  1;
ergoScriptGenerator.ORDER_CONDITIONAL = 2;

ergoScriptGenerator.init = function(workspace) {
  // Initialize the generator, if needed.
};

ergoScriptGenerator.finish = function(code) {
  // Finalize the generated code.
  return code;
};

ergoScriptGenerator.forBlock = Object.create(null);

ergoScriptGenerator.forBlock['public_key'] = function (block) {
  const key = block.getFieldValue('key');
  const code = `pk${key}`;
  return [code, ergoScriptGenerator.ORDER_ATOMIC];
};

ergoScriptGenerator.forBlock['public_key_threshold'] = function (block) {
  const key = block.getFieldValue('key');
  const code = `pk${key}, `;
  return code;
};

ergoScriptGenerator.forBlock['and'] = function (block) {
  const valueA = ergoScriptGenerator.valueToCode(block, 'A', ergoScriptGenerator.ORDER_ATOMIC);
  const valueB = ergoScriptGenerator.valueToCode(block, 'B', ergoScriptGenerator.ORDER_ATOMIC);
  const code = `${valueA} && ${valueB}`;
  return [code, ergoScriptGenerator.ORDER_LOGICAL_AND];
};

ergoScriptGenerator.forBlock['or'] = function (block) {
  const valueA = ergoScriptGenerator.valueToCode(block, 'A', ergoScriptGenerator.ORDER_ATOMIC);
  const valueB = ergoScriptGenerator.valueToCode(block, 'B', ergoScriptGenerator.ORDER_ATOMIC);
  const code = `${valueA} || ${valueB}`;
  return [code, ergoScriptGenerator.ORDER_LOGICAL_OR];
};

ergoScriptGenerator.forBlock['timelock'] = function (block) {
  const blockheight = block.getFieldValue('blockheight');
  const statementsDo = ergoScriptGenerator.statementToCode(block, 'DO');
  const statementsElse = ergoScriptGenerator.statementToCode(block, 'ELSE');
  const code = `(blockheight <= ${blockheight} ? ${statementsDo} : ${statementsElse})`;
  return [code, ergoScriptGenerator.ORDER_CONDITIONAL];
};

ergoScriptGenerator.forBlock['threshold'] = function (block) {
  const min = block.getFieldValue('min');
  const max = block.getFieldValue('max');
  const statementsKeys = ergoScriptGenerator.statementToCode(block, 'KEYS');
  const code = `threshold(${min}, ${max}, [${statementsKeys}])`;
  return [code, ergoScriptGenerator.ORDER_ATOMIC];
};
