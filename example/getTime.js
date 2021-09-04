const {Calendar} =  require('../main');

let {start,end} =  Calendar.getCurWeekTime();

console.log(Calendar.getFormatTime(end - start));