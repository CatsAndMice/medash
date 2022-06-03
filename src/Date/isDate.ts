import eq from "../Functions/eq"
import getType from "../Functions/getType"
/**
 * 判断是否`Date`对象类型
 */
export default (date): boolean => {
    const type = getType(date)
    return eq(type, 'Date')
}