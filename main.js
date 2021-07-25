const StrategyFrom = require("./src/fromTest/StrategyFromTest"),
    MathTool = require('./src/mathTool/MathTool'),
    Calendar = require('./src/calendar/Calendar'),
    MyStorage = require('./src/webStorage');
console.log(MathTool.getThousandsChar(1000.04,"-"));
module.exports = {
    StrategyFrom,
    MathTool,
    Calendar,
    MyStorage
}