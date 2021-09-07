const { Calendar } = require('../main')

const { start, end } = Calendar.getCurWeekTime()

console.log(Calendar.getFormatTime(end - start))
