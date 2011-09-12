// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Syntax constructions of switch statement
 *
 * @section 12.11
 * @path 12_Statement/12.11_The_switch_Statement/S12.11_A3_T5.js
 * @description Introducing statement not followed by "case" keyword
 * @negative
 */

function SwitchTest(value){
  var result = 0;
  
  switch(value) {
  	result =2;
    case 0:
      result += 2;
    default:
      result += 32;
      break;
  }
  
  return result;
}

var x = SwitchTest(0);

