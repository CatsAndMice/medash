"use strict";function r(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,a=[],i=!0,u=!1;try{for(n=n.call(r);!(i=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);i=!0);}catch(r){u=!0,o=r}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}(r,n)||t(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}module.exports=function(n){var e,o={},a=function(r,n){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=t(r))||n&&r&&"number"==typeof r.length){e&&(r=e);var o=0,a=function(){};return{s:a,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return u=r.done,r},e:function(r){l=!0,i=r},f:function(){try{u||null==e.return||e.return()}finally{if(l)throw i}}}}(new URL(n).search.replace("?","").split("&"));try{for(a.s();!(e=a.n()).done;){var i=r(e.value.split("="),2),u=i[0],l=i[1];o[u]=l}}catch(r){a.e(r)}finally{a.f()}return o};