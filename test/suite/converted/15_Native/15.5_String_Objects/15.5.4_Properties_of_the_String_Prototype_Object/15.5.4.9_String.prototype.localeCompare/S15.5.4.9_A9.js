// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.localeCompare.length property has the attribute DontDelete
 *
 * @section 15.5.4.9
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.9_String.prototype.localeCompare/S15.5.4.9_A9.js
 * @description Checking if deleting the String.prototype.localeCompare.length property fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.localeCompare.hasOwnProperty('length'))) {
  $ERROR('#0: String.prototype.localeCompare.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.localeCompare.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.localeCompare.length) {
  $ERROR('#1: delete String.prototype.localeCompare.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.localeCompare.hasOwnProperty('length'))) {
  $ERROR('#2: delete String.prototype.localeCompare.length; String.prototype.localeCompare.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.localeCompare.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

