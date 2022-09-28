import isNaN from "./isNaN"
import isUndefined from "./isUndefined"
import or from "./or"
/**
 * @use medash.toBoolean(value:any):boolean
 * @desc 将参数转化成`Boolean`类型，若参数为`0、FALSE、false、NaN、undefined`均会返回`false`
 * @version v3.4.0
 * @param value(any):任意类型值
 * @return (boolean): true/false
 * @example
 * 
 * toBoolean(0)//false
 * toBoolean(true)//true
 * toBoolean('true')//true
 * toBoolean(false)//false
 * toBoolean('false')//false
 * toBoolean('FALSE')//false
 * toBoolean(NaN)//false
 * toBoolean(undefined)//false
 */
const falseValues = new Set([0, "FALSE", 'false'])
const trueValues = new Set([1, "TRUE", 'true'])
export default (value) => {
    const isNaNOrUndefined = or(isNaN(value), isUndefined(value))
    if (or(isNaNOrUndefined, falseValues.has(value))) {
        return false
    }

    if (trueValues.has(value)) {
        return true
    }

    return Boolean(value)
}