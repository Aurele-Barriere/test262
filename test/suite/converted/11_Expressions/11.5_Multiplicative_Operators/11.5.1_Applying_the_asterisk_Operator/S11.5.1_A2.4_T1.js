// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * First expression is evaluated first, and then second expression
 *
 * @section 11.5.1
 * @path 11_Expressions/11.5_Multiplicative_Operators/11.5.1_Applying_the_asterisk_Operator/S11.5.1_A2.4_T1.js
 * @description Checking with "="
 */

//CHECK#1
var x = 0; 
if ((x = 1) * x !== 1) {
  $ERROR('#1: var x = 0; (x = 1) * x === 1. Actual: ' + ((x = 1) * x));
}

//CHECK#2
var x = 0; 
if (x * (x = 1) !== 0) {
  $ERROR('#2: var x = 0; x * (x = 1) === 0. Actual: ' + (x * (x = 1)));
}


