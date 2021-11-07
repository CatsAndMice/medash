"use strict";function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(exports,"__esModule",{value:!0});var o=require("./getMin.js"),i=function(t){return Math.max.apply(Math,t)},u=function(t){if(Set)return Array.from(new Set(t));var e=[];return t.forEach((function(t){!e.includes(t)&&e.push(t)})),e},a=function(t){return Array.isArray(t)?0===t.length:(console.warn("".concat(t,"不是Array类型")),!1)};function c(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return String(t)===String(e);if(!e||!t||"object"!==r(e)&&"object"!==r(t))return t===e;if(t.prototype!==e.prototype)return!1;var n=Object.keys(t),o=Object.keys(e);return n.length===o.length&&n.every((function(n){return c(t[n],e[n])}))}var s=function(t){return c(r(t),"object")&&c(t,null)},f=function(t){return"undefined"===r(t)},l=function(t){return s(t)||f(t)||c(t,0)||c(t,"")};function y(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(t),o=0;o<n.length;o++){var i=n[o],u=t[i],a=r(u);if("object"!==a)e[i]=u;else{if(s(u)){e[i]=u;continue}if(u instanceof Date){e[i]=new Date(u.getTime());continue}if(u instanceof RegExp){e[i]=new RegExp(u);continue}try{if(u instanceof Element){e[i]=u.cloneNode(!0);continue}}catch(t){console.warn("该运行环境中没有DOM元素")}e[i]=Array.isArray(u)?y(u,[]):y(u)}}return e}function p(t,e){return Array.isArray(e)?e.includes(t):c(t,e)}var d=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Array.isArray(e);return r||!l((e=e).isClone)&&(n=e.isClone),t.map((function(t){var o={};if(t=n?y(t):t,r)return e.forEach((function(e){var n=e.key,r=e.customKey,i=e.skip,u=t[n];p(u,i)||(o[r]=u)})),o;var i=e=e,u=i.key,a=i.customKey,c=i.skip,s=t[u];return p(s,c)||(o[a]=s),o})).filter((function(t){return!a(Object.keys(t))}))};function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Array.isArray(t),r=Object.keys(t);return n?r.map((function(e){return t[e]})):Object.assign(e,t)}var g=function(n){var r,o={},i=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=e(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,u=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw u}}}}(new URL(n).search.replace("?","").split("&"));try{for(i.s();!(r=i.n()).done;){var u=t(r.value.split("="),2),a=u[0],c=u[1];o[a]=c}}catch(t){i.e(t)}finally{i.f()}return o},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.keys(t),n="?";return e.forEach((function(e){var r=t[e];l(r)||(n+="".concat(e,"=").concat(r,"&"))})),n.replace(/&$/g,"")},b=function(t,e){return Number(t)<Number(e)},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";if(b(t,1e3))return String(t);var n=String(t).split("."),r=n[0].replace(/(\d)(?=(\d{3})+$)/g,(function(t){return t+e}));return n[1]?[r,n[1]].join("."):r},x=function(t,e){return e>t?Math.round(Math.random()*(e-t)+t):console.warn("max值小于min,参数不合法!")},w=function(t){var e=Math.abs(t);return b(e,10)?"0".concat(e):String(e)},S=function(t,e){return Number(t)>Number(e)},A=function(){return"undefined"!==("undefined"==typeof window?"undefined":r(window))},j=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,E=function(t){return j.test(t)},T=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,M=function(t){return T.test(String(t))},C=/^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{1,}(.*)?[A-Z]{1,})(?=.*[a-z]{1,}(.*)?[a-z]{1,})(?=.*[!@#$%^&*?]).*$/,O=function(t){return C.test(t)},k=function(t){return c(r(t),"function")},N={wait:1e3,immediate:!1},U=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=c(r(e),"object")&&!s(e),i=null,u=1e3;if(o){var a=m(N,e);n=a.immediate,u=a.wait}else u=e;return n&&t(),function(){i&&clearTimeout(i),i=setTimeout(t,u)}},D=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=c(r(e),"object")&&!s(e),i=null,u=1e3;if(o){var a=m(N,e);n=a.immediate,u=a.wait}else u=e;return n&&t(),function(){i||(i=setTimeout((function(){t(),i=null}),u))}},P={getMax:i,getMin:o,getUnique:u,isZeroLen:a,getClone:m,getDeelClone:y,eq:c,lt:b,gt:S,getUrlParams:g,isBrowser:A,isEmail:E,isEmpty:l,isNull:s,isTel:M,isUndefined:f,isSafePaddWord:O,isFunc:k,debounce:U,throttle:D,getConcatParams:v,getNumber:x,getGtTenStr:w,getThousandsChar:h,customKey:d};exports.getMin=o,exports.customKey=d,exports.debounce=U,exports.default=P,exports.eq=c,exports.getClone=m,exports.getConcatParams=v,exports.getDeelClone=y,exports.getGtTenStr=w,exports.getMax=i,exports.getNumber=x,exports.getThousandsChar=h,exports.getUnique=u,exports.getUrlParams=g,exports.gt=S,exports.isBrowser=A,exports.isEmail=E,exports.isEmpty=l,exports.isFunc=k,exports.isNull=s,exports.isSafePaddWord=O,exports.isTel=M,exports.isUndefined=f,exports.isZeroLen=a,exports.lt=b,exports.throttle=D;