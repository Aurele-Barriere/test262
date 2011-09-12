// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The parseFloat property can't be used as constructor
 *
 * @section 15.1.2.3, 11.2.2
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.3_parseFloat/S15.1.2.3_A7.7.js
 * @description If property does not implement the internal [[Construct]] method, throw a TypeError exception
 */

//CHECK#1

try {
  new parseFloat();
  $ERROR('#1.1: new parseFloat() throw TypeError. Actual: ' + (new parseFloat()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new parseFloat() throw TypeError. Actual: ' + (e));
  }
}

