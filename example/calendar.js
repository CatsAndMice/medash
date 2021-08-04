const { Calendar } = require('../main');
const time = new Date(Calendar.getTime('2021-2-5 23.0.50 '));
console.log(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());