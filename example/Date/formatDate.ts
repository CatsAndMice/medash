import { formatDate } from "../../main";
console.log(formatDate(10000, { day: '天',second:'秒',millisecond:'毫秒' }));
console.log(formatDate(1000,{day:"天",hour:'小时'}));
console.log(formatDate(1000 * 2 + 5));
console.log(formatDate(302544543,{hour:'时',minute:'分',concat:''}));



