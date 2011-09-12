// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x ? y : z uses GetValue
 *
 * @section 11.12, 8.7.1
 * @path 11_Expressions/11.12_Conditional_Operator/S11.12_A2.1_T3.js
 * @description If ToBoolean(x) is true and GetBase(y) is null, throw ReferenceError
 */

//CHECK#1
try {
  true ? y : false;
  $ERROR('#1.1: true ? y : false throw ReferenceError. Actual: ' + (true ? y : false));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: true ? y : false throw ReferenceError. Actual: ' + (e));  
  }
}

