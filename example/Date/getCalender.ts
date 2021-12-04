import { getCalender } from "../../main";
console.log(getCalender(Date.now(), 'YYYY.MM.DD'));
console.log(getCalender(Date.now(), 'YYYY.MM.DD hh时mm分ss秒'));
console.log(getCalender(Date.now(), 'hh时mm分ss秒'));

