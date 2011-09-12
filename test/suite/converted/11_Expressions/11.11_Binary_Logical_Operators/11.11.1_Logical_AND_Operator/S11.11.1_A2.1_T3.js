// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x && y uses GetValue
 *
 * @section 11.11.1, 8.7.1
 * @path 11_Expressions/11.11_Binary_Logical_Operators/11.11.1_Logical_AND_Operator/S11.11.1_A2.1_T3.js
 * @description If ToBoolean(x) is true and GetBase(y) is null, throw ReferenceError
 */

//CHECK#1
try {
  true && y;
  $ERROR('#1.1: true && y throw ReferenceError. Actual: ' + (true && y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: true && y throw ReferenceError. Actual: ' + (e));  
  }
}

