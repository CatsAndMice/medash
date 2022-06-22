import getType from "../Functions/getType"
import and from "../Functions/and"
import eq from "../Functions/eq"
import isFunc from "../Functions/isFunc"
import isEmpty from "../Functions/isEmpty"
/**
 * @desc 判断是否为`Promise`
 * @param promise(any):任意类型参数
 * @return `Boolean`:true为参数类型是一个`Promise`类型对象；否则不是。
 */
export default (promise) => {
    const isSureEmpty = isEmpty(promise)
    if (isSureEmpty) return !isSureEmpty
    const type = getType(promise)
    return and(eq(type, 'Promise'), isFunc(promise.then))
}