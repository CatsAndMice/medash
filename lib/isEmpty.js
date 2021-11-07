"use strict";var e=require("./isNull.js"),r=require("./isUndefined.js"),i=require("./eq.js");module.exports=function(s){return e(s)||r(s)||i(s,0)||i(s,"")};
