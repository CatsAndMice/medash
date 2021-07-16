const StrategyFrom = require('./src/fromTest/Strategy'),
    MathTool = require('./src/mathTool/MathTool'),
    Calendar = require('./src/calendar/Calendar');

MathTool.getRangeNumber(2, 6);
console.log(MathTool.getUseTwoNumberToString(12));
console.log(Calendar.getStringCalender());
module.exports = {
    StrategyFrom,
    MathTool
}
