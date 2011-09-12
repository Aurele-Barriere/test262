// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * when String.prototype.indexOf(searchString, position) is called first Call ToString, giving it the this value as its argument.
 * Then Call ToString(searchString) and Call ToNumber(position)
 *
 * @section 15.5.4.7
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A4_T3.js
 * @description Override toString and valueOf functions
 */

var __obj = {toString:function(){return "\u0041B";}}
var __obj2 = {valueOf:function(){return {};},toString:function(){return "1";}}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("ABB\u0041BABAB".indexOf(__obj, __obj2)!==3) {
  $ERROR('#1: var __obj = {toString:function(){return "\u0041B";}}; var __obj2 = {valueOf:function(){return {};},toString:function(){return "1";}}; "ABB\\u0041BABAB".indexOf(__obj, __obj2)===3. Actual: '+("ABB\u0041BABAB".indexOf(__obj, __obj2))); 
}
//
//////////////////////////////////////////////////////////////////////////////

