/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";

export const blocksDefinitions = [
	{
		type: "public_key",
		message0: "pk %1",
		args0: [
			{
				type: "field_input",
				name: "key",
				text: "1",
			},
		],
		output: "Boolean",
		colour: 230,
		tooltip: "Public key",
		helpUrl: "",
	},
	{
		type: "and",
		message0: "%1 && %2",
		args0: [
			{
				type: "input_value",
				name: "A",
				check: "Boolean",
			},
			{
				type: "input_value",
				name: "B",
				check: "Boolean",
			},
		],
		output: "Boolean",
		colour: 120,
		tooltip: "AND operation",
		helpUrl: "",
	},
	{
		type: "or",
		message0: "%1 || %2",
		args0: [
			{
				type: "input_value",
				name: "A",
				check: "Boolean",
			},
			{
				type: "input_value",
				name: "B",
				check: "Boolean",
			},
		],
		output: "Boolean",
		colour: 210,
		tooltip: "OR operation",
		helpUrl: "",
	},
	{
		type: "timelock",
		message0: "blockheight <= %1 do %2 else %3",
		args0: [
			{
				type: "field_number",
				name: "blockheight",
				value: 0,
			},
			{
				type: "input_value",
				name: "DO",
				check: "Boolean",
			},
			{
				type: "input_value",
				name: "ELSE",
				check: "Boolean",
			},
		],
		output: "Boolean",
		colour: 210,
		tooltip: "Timelock conditional",
		helpUrl: "",
	},
	{
		type: "threshold",
		message0: "min %1 max %2 keys %3",
		args0: [
			{
				type: "field_number",
				name: "min",
				value: 1,
			},
			{
				type: "field_number",
				name: "max",
				value: 1,
			},
			{
				type: "input_statement",
				name: "KEYS",
				check: "Key",
			},
		],
		output: "Boolean",
		colour: 120,
		tooltip: "Threshold signature scheme",
		helpUrl: "",
	},
	{
		type: "public_key_threshold",
		message0: "pk %1",
		args0: [
			{
				type: "field_input",
				name: "key",
				text: "1",
			},
		],
		previousStatement: "Key",
		nextStatement: "Key",
		colour: 230,
		tooltip: "Public key for threshold",
		helpUrl: "",
	},
];

export const blocks =
	Blockly.common.createBlockDefinitionsFromJsonArray(blocksDefinitions);
