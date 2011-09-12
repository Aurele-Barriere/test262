// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator --x returns ToNumber(x) - 1
 *
 * @section 11.4.5, 11.6.3
 * @path 11_Expressions/11.4_Unary_Operators/11.4.5_Prefix_Decrement_Operator/S11.4.5_A4_T4.js
 * @description Type(x) is undefined or null
 */

//CHECK#1
var x;
if (isNaN(--x) !== true) {
  $ERROR('#1: var x; --x; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#2
var x = null;
if (--x !== -1) {
  $ERROR('#2: var x = null; --x === -1. Actual: ' + (--x));
}

