// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of the replace method is 2
 *
 * @section 15.5.4.11
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.11_String.prototype.replace/S15.5.4.11_A11.js
 * @description Checking String.prototype.replace.length
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.replace.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.replace.hasOwnProperty("length") return true. Actual: '+String.prototype.replace.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.replace.length !== 2) {
  $ERROR('#2: String.prototype.replace.length === 2. Actual: '+String.prototype.replace.length );
}
//
//////////////////////////////////////////////////////////////////////////////

