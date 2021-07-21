/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const StrategyFrom = __webpack_require__(/*! ./src/fromTest/StrategyFromTest */ \"./src/fromTest/StrategyFromTest.js\"),\r\n    MathTool = __webpack_require__(/*! ./src/mathTool/MathTool */ \"./src/mathTool/MathTool.js\"),\r\n    Calendar = __webpack_require__(/*! ./src/calendar/Calendar */ \"./src/calendar/Calendar.js\"),\r\n    MyStorage = __webpack_require__(/*! ./src/webStorage */ \"./src/webStorage/index.js\");\r\nmodule.exports = {\r\n    StrategyFrom,\r\n    MathTool,\r\n    Calendar,\r\n    MyStorage\r\n};\n\n//# sourceURL=webpack://tool-hai/./main.js?");

/***/ }),

/***/ "./src/calendar/Calendar.js":
/*!**********************************!*\
  !*** ./src/calendar/Calendar.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MathTool = __webpack_require__(/*! ../mathTool/MathTool */ \"./src/mathTool/MathTool.js\");\r\nclass Calendar {\r\n    ymdReg = /^(YY).(MM).(DD).?$/g;\r\n    hmsReg = /^(hh).(mm).(ss).?$/g;\r\n    dateReg = /^(YY).(MM).(DD).?\\s(hh).(mm).?(ss)?.?$/g;\r\n    _getCurDate() {\r\n        return new Date();\r\n    }\r\n\r\n    getMonth() {\r\n        const month = this.CurDate ? this.CurDate.getMonth() : this._getCurDate().getMonth();\r\n        return month + 1;\r\n    }\r\n\r\n    _createYMDArray() {\r\n        return [this.CurDate.getFullYear(), this.getMonth(), this.CurDate.getDate()];\r\n    }\r\n\r\n    _createHMSArray() {\r\n        return [this.CurDate.getHours(), this.CurDate.getMinutes(), this.CurDate.getSeconds()];\r\n    }\r\n\r\n    _createArray(format, captures) {\r\n        let date = null;\r\n        if (captures.length === 6) {\r\n            date = [].concat(this._createYMDArray(), this._createHMSArray());\r\n        } else {\r\n            date = this.ymdReg.test(format) ? this._createYMDArray() : this._createHMSArray();\r\n        }\r\n        return captures.map((val, index) => {\r\n            return { key: val, value: MathTool.getUseTwoNumberToString(date[index]) };\r\n        })\r\n    }\r\n\r\n    /**\r\n     * 获取返回时间格式对应的时间字符串\r\n     * @param {*} format 时间格式\r\n     * @param {*} reg 正则\r\n     * @returns String\r\n     */\r\n    _getReplaceFormat(format, reg) {\r\n        return format.replace(reg, (match, ...captures) => {\r\n            captures.splice(-2);\r\n            const strs = this._createArray(format, captures);\r\n            return strs.map((str) => {\r\n                const { key, value } = str;\r\n                match = match.replace(key, value);\r\n                return match;\r\n            }).pop();\r\n        })\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {*} dateTime 时间\r\n     * @param {*} format 时间格式  默认时间格式YY.MM.DD hh:mm:ss 可选YY.MM.DD或hh:mm:ss\r\n     * @returns String\r\n     */\r\n    getStringCalender(dateTime, format = 'YY.MM.DD hh:mm:ss') {\r\n        this.CurDate = dateTime ? new Date(dateTime) : this._getCurDate();\r\n        const regs = [this.ymdReg, this.hmsReg, this.dateReg];\r\n        return this._getReplaceFormat(format, regs.find(reg => reg.test(format)));\r\n    }\r\n}\r\nmodule.exports = new Calendar();\n\n//# sourceURL=webpack://tool-hai/./src/calendar/Calendar.js?");

/***/ }),

/***/ "./src/fromTest/FromTest.js":
/*!**********************************!*\
  !*** ./src/fromTest/FromTest.js ***!
  \**********************************/
/***/ ((module) => {

eval("class FromTest {\r\n    /**\r\n     * 数组长度不为0\r\n     * @param {*} dataSource 值 \r\n     * @returns Boolean\r\n     */\r\n    islengthNoZero(dataSource) {\r\n        let isArr = Array.isArray(dataSource);\r\n        if (isArr) {\r\n            return dataSource.length === 0 ? false : true;\r\n        }\r\n        console.warn(`${dataSource}不是Array类型`);\r\n        return false;\r\n    }\r\n\r\n    /**\r\n     * 值不为空\r\n     * @param {*} dataSource 值\r\n     * @returns Boolean\r\n     * \r\n     */\r\n    isValueNoEmpty(dataSource) {\r\n        let types = ['string', 'number'],\r\n            type = typeof dataSource;\r\n        if (types.includes(type)) {\r\n            return dataSource == '' ? false : true;\r\n        }\r\n        console.warn(`${dataSource}类型不是string或number`);\r\n        return false;\r\n    }\r\n\r\n    isValueNoUndefined(dataSource) {\r\n        let type = typeof dataSource;\r\n        return type === \"undefined\" ? false : true;\r\n    }\r\n\r\n    /**\r\n     * 电话号码是否符合正确的格式\r\n     * @param {*} dataSource 电话号码 \r\n     */\r\n    isQualifiedTel(dataSource) {\r\n        return /^1[3568][\\d]{9}$/.test(dataSource);\r\n    }\r\n\r\n    /**\r\n     * 值是否相同\r\n     * @param {*} dataSource 实际值\r\n     * @param {*} value 目标值 \r\n     * @returns Boolean\r\n     */\r\n    isEqualsValue(dataSource, value) {\r\n        return dataSource === value ? true : false;\r\n    }\r\n}\r\nmodule.exports = new FromTest();\n\n//# sourceURL=webpack://tool-hai/./src/fromTest/FromTest.js?");

/***/ }),

/***/ "./src/fromTest/StrategyFromTest.js":
/*!******************************************!*\
  !*** ./src/fromTest/StrategyFromTest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const FromTest = __webpack_require__(/*! ./FromTest */ \"./src/fromTest/FromTest.js\");\r\n\r\n/**\r\n * 策略模式实现表单校验\r\n */\r\nclass StrategyFromTest {\r\n    FromTest = FromTest;\r\n    cacheTest = [];\r\n    _triggerErrorFn(fn) {\r\n        fn();\r\n        return false;\r\n    }\r\n\r\n    _moreConfig(dataSource, config) {\r\n        for (const conf of config) {\r\n            this._oneConfig(dataSource, conf);\r\n        }\r\n    }\r\n\r\n    _oneConfig(dataSource, config) {\r\n        let { description, errorFn } = config,\r\n            [methodName, value] = description.split(\":\");\r\n        this.cacheTest.push({ dataSource, methodName, value, errorFn });\r\n    }\r\n\r\n    /**\r\n     * 开始校验表单\r\n     * @returns Boolean\r\n     */\r\n    start() {\r\n        if (!this.cacheTest.length) return;\r\n        while (this.cacheTest.length) {\r\n            let test = this.cacheTest.shift(),\r\n                { dataSource, methodName, value, errorFn } = test,\r\n                isHaveMehtod = methodName in this.FromTest;\r\n            if (isHaveMehtod) {\r\n                if (!this.FromTest[methodName](dataSource, value)) {\r\n                    return this._triggerErrorFn(errorFn);\r\n                }\r\n            } else {\r\n                console.warn(`${methodName}访方法不存在`);\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * 表单校验添加至缓存区\r\n     * @param {*} dataSource 需要校验表单值\r\n     * @param {*} config 表单需要满足的要求\r\n     */\r\n    addCacheTest(dataSource, config) {\r\n        let isArr = Array.isArray(config);\r\n        isArr ? this._moreConfig(dataSource, config) : this._oneConfig(dataSource, config);\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = new StrategyFromTest();\n\n//# sourceURL=webpack://tool-hai/./src/fromTest/StrategyFromTest.js?");

/***/ }),

/***/ "./src/mathTool/MathTool.js":
/*!**********************************!*\
  !*** ./src/mathTool/MathTool.js ***!
  \**********************************/
/***/ ((module) => {

eval("/**\r\n * 处理数字类\r\n */\r\nclass MathTool {\r\n    /**\r\n     * 随机获取一个范围内的值\r\n     * @param {*} min 最小值\r\n     * @param {*} max 最大值 \r\n     * @returns Number\r\n     */\r\n    getRangeNumber(min, max) {\r\n        return Math.round((Math.random() * (max - min)) + min);\r\n    }\r\n\r\n    /**\r\n     * 返回一个两位数的字符串,传入的数字小于10进行拼接\r\n     * @param {*} num 传入的数字\r\n     * @returns String\r\n     */\r\n    getUseTwoNumberToString(num) {\r\n        return num < 10 ? `0${num}` : String(num);\r\n    }\r\n}\r\n\r\nmodule.exports = new MathTool();\n\n//# sourceURL=webpack://tool-hai/./src/mathTool/MathTool.js?");

/***/ }),

/***/ "./src/webStorage/LocalStorage.js":
/*!****************************************!*\
  !*** ./src/webStorage/LocalStorage.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ModuleStorage = __webpack_require__(/*! ./ModuleStorage */ \"./src/webStorage/ModuleStorage.js\"),\r\n    StrategyFromTest = __webpack_require__(/*! ../fromTest/StrategyFromTest */ \"./src/fromTest/StrategyFromTest.js\"),\r\n    { isValueNoUndefined, isValueNoEmpty } = __webpack_require__(/*! ./TestMethods */ \"./src/webStorage/TestMethods.js\");\r\n\r\nclass LocalStorage extends ModuleStorage {\r\n    //存储类型\r\n    Storage = window.localStorage;\r\n    _isKey(key) {\r\n        StrategyFromTest.addCacheTest(key, [\r\n            Object.assign(isValueNoUndefined, { errorFn: () => console.warn('key值不能为undefined') }),\r\n            Object.assign(isValueNoEmpty, { errorFn: () => console.warn('key值不能为空') })]);\r\n        return StrategyFromTest.start();\r\n    }\r\n\r\n    setItem(key, value) {\r\n        StrategyFromTest.addCacheTest(value, [\r\n            Object.assign(isValueNoUndefined, { errorFn: () => console.warn('value值不能为undefined') }),\r\n            Object.assign(isValueNoEmpty, { errorFn: () => console.warn('value值不能为空') })]);\r\n        _isKey(key) ? this.Storage.setItem(key, JSON.stringify(value)) : null;\r\n    }\r\n\r\n    getItem(key) {\r\n        return this._isKey(key) ? JSON.parse(this.Storage.getItem(key)) : null;\r\n    }\r\n\r\n    removeItem(key) {\r\n        return this._isKey(key) ? this.Storage.removeItem(key) : null;\r\n    }\r\n\r\n    clear() {\r\n        return this.Storage.clear();\r\n    }\r\n}\r\n\r\nmodule.exports = new LocalStorage();\n\n//# sourceURL=webpack://tool-hai/./src/webStorage/LocalStorage.js?");

/***/ }),

/***/ "./src/webStorage/ModuleStorage.js":
/*!*****************************************!*\
  !*** ./src/webStorage/ModuleStorage.js ***!
  \*****************************************/
/***/ ((module) => {

eval("class ModuleStorage {\r\n    setItem() {\r\n        throw new Error('抽象方法setItem不能直接调用');\r\n    }\r\n    getItem() {\r\n        throw new Error('抽象方法getItem不能直接调用');\r\n    }\r\n    removeItem(){\r\n        throw new Error('抽象方法removeItem不能直接调用');\r\n    }\r\n    clear(){\r\n        throw new Error('抽象方法clear不能直接调用');\r\n    }\r\n\r\n}\r\nmodule.exports = ModuleStorage;\n\n//# sourceURL=webpack://tool-hai/./src/webStorage/ModuleStorage.js?");

/***/ }),

/***/ "./src/webStorage/SessionStorage.js":
/*!******************************************!*\
  !*** ./src/webStorage/SessionStorage.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ModuleStorage = __webpack_require__(/*! ./ModuleStorage */ \"./src/webStorage/ModuleStorage.js\");\r\nclass SessionStorage extends ModuleStorage {\r\n    Storage = window.sessionStorage;\r\n    _isKey(key) {\r\n        StrategyFromTest.addCacheTest(key, [\r\n            Object.assign(isValueNoUndefined, { errorFn: () => console.warn('key值不能为undefined') }),\r\n            Object.assign(isValueNoEmpty, { errorFn: () => console.warn('key值不能为空') })]);\r\n        return StrategyFromTest.start();\r\n    }\r\n\r\n    setItem(key, value) {\r\n        StrategyFromTest.addCacheTest(value, [\r\n            Object.assign(isValueNoUndefined, { errorFn: () => console.warn('value值不能为undefined') }),\r\n            Object.assign(isValueNoEmpty, { errorFn: () => console.warn('value值不能为空') })]);\r\n        _isKey(key) ? this.Storage.setItem(key, JSON.stringify(value)) : null;\r\n    }\r\n\r\n    getItem(key) {\r\n        return this._isKey(key) ? JSON.parse(this.Storage.getItem(key)) : null;\r\n    }\r\n\r\n    removeItem(key) {\r\n        return this._isKey(key) ? this.Storage.removeItem(key) : null;\r\n    }\r\n\r\n    clear() {\r\n        return this.Storage.clear();\r\n    }\r\n}\r\n\r\nmodule.exports = new SessionStorage();\n\n//# sourceURL=webpack://tool-hai/./src/webStorage/SessionStorage.js?");

/***/ }),

/***/ "./src/webStorage/TestMethods.js":
/*!***************************************!*\
  !*** ./src/webStorage/TestMethods.js ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = {\r\n    isValueNoUndefined: { description: 'isValueNoUndefined' },\r\n    isValueNoEmpty: { description: 'isValueNoEmpty' }\r\n}\n\n//# sourceURL=webpack://tool-hai/./src/webStorage/TestMethods.js?");

/***/ }),

/***/ "./src/webStorage/index.js":
/*!*********************************!*\
  !*** ./src/webStorage/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const SessionStorage = __webpack_require__(/*! ./SessionStorage */ \"./src/webStorage/SessionStorage.js\"),\r\n    LocalStorage = __webpack_require__(/*! ./LocalStorage */ \"./src/webStorage/LocalStorage.js\");\r\n\r\nmodule.exports = {\r\n    SessionStorage,\r\n    LocalStorage\r\n}\n\n//# sourceURL=webpack://tool-hai/./src/webStorage/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;