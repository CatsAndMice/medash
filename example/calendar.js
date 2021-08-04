const { Calendar } = require('../main');
const time = new Date(Calendar.getTime('2021-2-5 23时a'));
console.log(Calendar.getTime('2023年12月23日 9:34'));
console.log(Calendar.getTime('2023'));
console.log(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());