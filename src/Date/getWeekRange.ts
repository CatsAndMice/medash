import { range } from "./resetDate";
import gt from "../Functions/gt";
const dayMs = 1000 * 60 * 60 * 24
const getDay = () => {
    const date = new Date();
    const day = date.getDay();
    date.setHours(0);
    date.setSeconds(0);
    date.setMinutes(0);
    return {
        day: gt(day, 0) ? day : 7,
        date
    }
}

//获取当前周的时间区间
export default (): range => {
    const { day, date } = getDay();
    const start = date.getTime() - day * dayMs;
    return {
        start,
        end: start + 7 * dayMs
    }
}