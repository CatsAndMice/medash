!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["@lihai-js/tool"]=t():e["@lihai-js/tool"]=t()}(self,(function(){return e={353:e=>{var t,r;self,e.exports=(t={353:e=>{var t,r;self,e.exports=(t={353:e=>{var t,r;self,e.exports=(t={220:(e,t,r)=>{const n=r(224),o=r(296),a=r(595),i=r(250),u=r(340);e.exports={StrategyFrom:n,MathTool:o,Calendar:a,MyStorage:i,DebounceAndThrottle:u}},595:(e,t,r)=>{var n=r(296),o=/^(YY).(MM).(DD).?$/g,a=/^(hh).(mm).(ss).?$/g,i=/^(YY).(MM).(DD).?\s(hh).(mm).?(ss)?.?$/g,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return(t=[{key:"_getCurDate",value:function(){return new Date}},{key:"getMonth",value:function(){return(this.CurDate?this.CurDate.getMonth():this._getCurDate().getMonth())+1}},{key:"_createYMDArray",value:function(){return[this.CurDate.getFullYear(),this.getMonth(),this.CurDate.getDate()]}},{key:"_createHMSArray",value:function(){return[this.CurDate.getHours(),this.CurDate.getMinutes(),this.CurDate.getSeconds()]}},{key:"_createArray",value:function(e,t){var r;return r=6===t.length?[].concat(this._createYMDArray(),this._createHMSArray()):o.test(e)?this._createYMDArray():this._createHMSArray(),t.map((function(e,t){return{key:e,value:n.getUseTwoNumberToString(r[t])}}))}},{key:"_getReplaceFormat",value:function(e,t){var r=this;if(console.log(t),t)return e.replace(t,(function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return o.splice(-2),r._createArray(e,o).map((function(e){var r=e.key,n=e.value;return t=t.replace(r,n)})).pop()}));console.warn("".concat(e,"格式不正确"))}},{key:"getStringCalender",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YY.MM.DD hh:mm:ss";this.CurDate=e?new Date(e):this._getCurDate();var r=[o,a,i];return this._getReplaceFormat(t,r.find((function(e){return e.test(t)})))}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}();e.exports=new u},340:e=>{var t=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.debounceTime=null,this.throttleTime=null}var t;return(t=[{key:"debounce",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=this;return arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&e.call(this),function(){var n=arguments,o=this;r.debounceTime&&clearTimeout(r.debounceTime),r.debounceTime=setTimeout((function(){e.apply(o,n)}),t)}}},{key:"cancelDebounce",value:function(){this.debounceTime&&clearTimeout(this.debounceTime),this.debounceTime=null}},{key:"throttle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=this;return function(){var n=arguments,o=this;r.throttleTime||(r.throttleTime=setTimeout((function(){r.throttleTime=null,e.apply(o,n)}),t))}}},{key:"cancelThrottle",value:function(){this.throttleTime&&clearTimeout(this.throttleTime),this.throttleTime=null}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}();e.exports=new t},975:e=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var r;return(r=[{key:"islengthNoZero",value:function(e){return Array.isArray(e)?0!==e.length:(console.warn("".concat(e,"不是Array类型")),!1)}},{key:"isValueNoEmpty",value:function(e){var r=t(e);return["string","number"].includes(r)?""!=e:(console.warn("".concat(e,"类型不是string或number")),!1)}},{key:"isValueNoUndefined",value:function(e){return"undefined"!==t(e)}},{key:"isQualifiedTel",value:function(e){return/^1[3568][\d]{9}$/.test(e)}},{key:"isEqualsValue",value:function(e,t){return e===t}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,r),e}();e.exports=new r},224:(e,t,r)=>{function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=r(975),i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.FromTest=t,this.cacheTest=[]}var t;return(t=[{key:"_triggerErrorFn",value:function(e){return e(),!1}},{key:"_moreConfig",value:function(e,t){var r,o=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}(t);try{for(o.s();!(r=o.n()).done;){var a=r.value;this._oneConfig(e,a)}}catch(e){o.e(e)}finally{o.f()}}},{key:"_oneConfig",value:function(e,t){var r,o=t.description,a=t.errorFn,i=function(e){if(Array.isArray(e))return e}(r=o.split(":"))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),2!==a.length);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(r)||n(r,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=i[0],c=i[1];this.cacheTest.push({dataSource:e,methodName:u,value:c,errorFn:a})}},{key:"start",value:function(){if(this.cacheTest.length){for(;this.cacheTest.length;){var e=this.cacheTest.shift(),t=e.dataSource,r=e.methodName,n=e.value,o=e.errorFn;if(!(r in this.FromTest))return console.warn("".concat(r,"访方法不存在")),!1;if(!this.FromTest[r](t,n))return this._triggerErrorFn(o)}return!0}}},{key:"addCacheTest",value:function(e,t){Array.isArray(t)?this._moreConfig(e,t):this._oneConfig(e,t)}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}();e.exports=new i(a)},296:e=>{var t=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return(t=[{key:"getRangeNumber",value:function(e,t){return Math.round(Math.random()*(t-e)+e)}},{key:"getUseTwoNumberToString",value:function(e){var t=Math.abs(e);return t<10?"0".concat(t):String(t)}},{key:"getThousandsChar",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";if(e<1e3)return String(e);var r=String(e).split("."),n=r[0].replace(/(\d)(?=(\d{3})+$)/g,(function(e){return e+t}));return r[1]?[n,r[1]].join("."):n}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}();e.exports=new t},918:(e,t,r)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,r){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(l,e);var t,r,n,c=(r=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(r);if(n){var o=u(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return i(this,e)});function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),e=c.call(this);try{e.Storage=globalThis.localStorage}catch(e){console.warn("webStorge仅适用于浏览器环境")}return e}return(t=[{key:"setItem",value:function(e,t){o(u(l.prototype),"_isValue",this).call(this,t)&&o(u(l.prototype),"_isHaveStoargeAndKey",this).call(this,e)&&this.Storage.setItem(e,JSON.stringify(t))}},{key:"getItem",value:function(e){return o(u(l.prototype),"_isHaveStoargeAndKey",this).call(this,e)?JSON.parse(this.Storage.getItem(e)):null}},{key:"removeItem",value:function(e){return o(u(l.prototype),"_isHaveStoargeAndKey",this).call(this,e)?this.Storage.removeItem(e):null}},{key:"clear",value:function(){return o(u(l.prototype),"_isHaveStoarge",this).call(this)?this.Storage.clear():null}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(l.prototype,t),l}(r(967));e.exports=new c},967:(e,t,r)=>{var n=r(514),o=n.isValueNoUndefined,a=n.isValueNoEmpty,i=r(224),u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return(t=[{key:"_isKey",value:function(e){return i.addCacheTest(e,[Object.assign(o,{errorFn:function(){return console.warn("key值不能为undefined")}}),Object.assign(a,{errorFn:function(){return console.warn("key值不能为空")}})]),i.start()}},{key:"_isValue",value:function(e){return i.addCacheTest(e,[Object.assign(o,{errorFn:function(){return console.warn("value值不能为undefined")}}),Object.assign(a,{errorFn:function(){return console.warn("value值不能为空")}})]),i.start()}},{key:"_warn",value:function(){return console.warn("webStorge仅适用于浏览器环境"),!1}},{key:"_isHaveStoarge",value:function(){return!!this.Storage||this._warn()}},{key:"_isHaveStoargeAndKey",value:function(e){return!!this._isHaveStoarge()&&this._isKey(e)}},{key:"setItem",value:function(){throw new Error("抽象方法setItem不能直接调用")}},{key:"getItem",value:function(){throw new Error("抽象方法getItem不能直接调用")}},{key:"removeItem",value:function(){throw new Error("抽象方法removeItem不能直接调用")}},{key:"clear",value:function(){throw new Error("抽象方法clear不能直接调用")}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}();e.exports=u},476:(e,t,r)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,r){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(l,e);var t,r,n,c=(r=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(r);if(n){var o=u(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return i(this,e)});function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),e=c.call(this);try{e.Storage=globalThis.sessionStorage}catch(e){console.warn("webStorge仅适用于浏览器环境")}return e}return(t=[{key:"setItem",value:function(e,t){o(u(l.prototype),"_isValue",this).call(this,t)&&o(u(l.prototype),"_isHaveStoargeAndKey",this).call(this,e)&&this.Storage.setItem(e,JSON.stringify(t))}},{key:"getItem",value:function(e){return o(u(l.prototype),"_isHaveStoargeAndKey",this).call(this,e)?JSON.parse(this.Storage.getItem(e)):null}},{key:"removeItem",value:function(e){return o(u(l.prototype),"_isHaveStoargeAndKey",this).call(this,e)?this.Storage.removeItem(e):null}},{key:"clear",value:function(){return o(u(l.prototype),"_isHaveStoarge",this).call(this)?this.Storage.clear():null}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(l.prototype,t),l}(r(967));e.exports=new c},514:e=>{e.exports={isValueNoUndefined:{description:"isValueNoUndefined"},isValueNoEmpty:{description:"isValueNoEmpty"}}},250:(e,t,r)=>{var n=r(476),o=r(918);e.exports={SessionStorage:n,LocalStorage:o}}},r={},function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}(220).default)}},r={},function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}(353).default)}},r={},function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}(353).default)}},t={},function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(353).default;var e,t}));