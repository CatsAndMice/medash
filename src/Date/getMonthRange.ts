import { range } from "./resetDate";
const eachMonthFn = () => {
    const eachMonth = new Date();
    eachMonth.setHours(0);
    eachMonth.setSeconds(0);
    eachMonth.setMinutes(0);
    eachMonth.setDate(1);
    return eachMonth;
}
//获取当前月的时间区间
export default (): range => {
    const eachMonth = eachMonthFn();
    const start = eachMonth.getTime()
    const month = eachMonth.getMonth()
    eachMonth.setMonth(month + 1)
    return {
        start,
        end: eachMonth.getTime()
    }
}