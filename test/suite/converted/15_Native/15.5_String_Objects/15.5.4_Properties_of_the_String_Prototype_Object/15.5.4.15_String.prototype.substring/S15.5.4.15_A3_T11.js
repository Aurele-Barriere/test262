// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.substring (start, end) can be applied to non String object instance and
 * returns a string value(not object)
 *
 * @section 15.5.4.15
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.15_String.prototype.substring/S15.5.4.15_A3_T11.js
 * @description Apply String.prototype.substring to Boolean instance. Start is new Array(), end is new Boolean(1)
 */

var __instance = new Boolean();
 
__instance.substring = String.prototype.substring;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.substring(new Array(), new Boolean(1)) !== "f") {
  $ERROR('#1: __instance = new Boolean(); __instance.substring = String.prototype.substring;  __instance.substring(new Array(), new Boolean(1)) === "f". Actual: '+__instance.substring(new Array(), new Boolean(1)) );
}
//
//////////////////////////////////////////////////////////////////////////////

