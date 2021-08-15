const MathTool = require('../src/mathTool/MathTool');
MathTool.extends({
    getNum(num) {
        return num / 2;
    }
});

console.log(MathTool.getNum(1));