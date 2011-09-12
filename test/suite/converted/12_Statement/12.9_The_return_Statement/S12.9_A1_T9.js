// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Appearing of "return" without a function body leads to syntax error
 *
 * @section 12.9
 * @path 12_Statement/12.9_The_return_Statement/S12.9_A1_T9.js
 * @description Checking if execution of "return", placed into a catch Block, fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
    throw 1;
} catch(e){
    return e;
}
//
//////////////////////////////////////////////////////////////////////////////

