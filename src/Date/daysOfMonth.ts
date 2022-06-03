import isNumber from "../Functions/isNumber"
import isDate from "./isDate"
import getYmdHms from "./getYmdHms"
import isEmpty from "../Functions/isEmpty"
/**
 * 获取当前月份有多少天
 */
const day = 1000 * 60 * 60 * 24
export default (date: Date | number = Date.now()): number => {
    if(isEmpty(date))return 0;
    if (isNumber(date)) { date = new Date(date) }
    if (!isDate(date)) return 0;
    const { month } = getYmdHms(date);
    (date as Date).setDate(1);
    (date as Date).setMonth(month + 1)
    const time = (date as Date).getTime() - day
    return getYmdHms(time).date
}

