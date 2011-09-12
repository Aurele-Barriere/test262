// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "getFullYear" has { DontEnum } attributes
 *
 * @section 15.9.5.10
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.10_Date.prototype.getFullYear/S15.9.5.10_A1_T2.js
 * @description Checking absence of DontDelete attribute
 */

if (delete Date.prototype.getFullYear  === false) {
  $ERROR('#1: The Date.prototype.getFullYear property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getFullYear')) {
  $FAIL('#2: The Date.prototype.getFullYear property has not the attributes DontDelete');
}


