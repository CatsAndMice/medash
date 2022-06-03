import { isDate } from "../../main";
console.log(isDate(''));//false
console.log(isDate(1));//false
console.log(isDate({}));//false
console.log(isDate(Date));//false
console.log(isDate(new Date()));//true




