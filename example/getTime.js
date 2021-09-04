const {Calendar} =  require('../main');

let {start,end} =  Calendar.getMonthTime();

console.log(Calendar.getFormatTime(end - start));