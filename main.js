const StrategyFrom = require("./src/fromTest/StrategyFromTest"),
    MathTool = require('./src/mathTool/MathTool'),
    Calendar = require('./src/calendar/Calendar'),
    MyStorage = require('./src/webStorage'),
    DebounceAndThrottle = require('./src/debounceAndThrottle/DebounceAndThrottle');

let fn = DebounceAndThrottle.debounce(() => {
    console.log(122);
}, 1000, true)
setInterval(() => {
    fn();
}, 2000)

module.exports = {
    StrategyFrom,
    MathTool,
    Calendar,
    MyStorage,
    DebounceAndThrottle
}