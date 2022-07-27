import isFunc from "./isFunc"

/**
 * @use medash.isNaN(value)
 * @desc 判断参数是否为`NaN`
 * @version v3.3.5
 * @param value(any):任意类型值
 * @return (boolean): 如果参数是`NaN`，那么返回 `true`，否则返回 `false`。
 * @example 
 * isNaN(1)//false
 * isNaN(NaN)//true
 */
export default (value) => {
    if (!isFunc(Number.isNaN)) {
        return value !== value
    }
    return Number.isNaN(value)
}  

