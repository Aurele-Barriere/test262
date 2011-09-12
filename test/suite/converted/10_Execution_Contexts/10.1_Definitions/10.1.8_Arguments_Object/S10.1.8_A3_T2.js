// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * A property is created with name callee with property
 * attributes { DontEnum } and no others
 *
 * @section 10.1.8
 * @path 10_Execution_Contexts/10.1_Definitions/10.1.8_Arguments_Object/S10.1.8_A3_T2.js
 * @description Checking if enumerating the arguments.callee property fails
 */

//CHECK#1
function f1(){
  for(var x in arguments){
    if (x === "callee"){
      return false;
    }
  }
  return true;
}

try{
  if(!f1()){
    $ERROR("#1: A property callee don't have attribute { DontEnum }");
  }
}
catch(e){
  $ERROR("#1: arguments object don't exists");
}

//CHECK#2
var f2 = function(){
  for(var x in arguments){
    if (x === "callee"){
      return false;
    }
  }
  return true;
}

try{
  if(!f2()){
    $ERROR("#2: A property callee don't have attribute { DontEnum }");
  }
}
catch(e){
  $ERROR("#2: arguments object don't exists");
}

