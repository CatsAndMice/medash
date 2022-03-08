import and from "../Functions/and";
import eq from "../Functions/eq";
import isFunc from "../Functions/isFunc";
import isNull from "../Functions/isNull";
const isTypeObject = (value) => {
    const type = typeof value;
    return and(!isNull(value), eq(type, 'object'));
}
export default (arr) => {
    const isObj = isTypeObject(arr);
    if (isObj) {
        const getFunc = arr[Symbol.iterator];
        return isFunc(getFunc) ? Array.from(arr) : [];
    }
    return [];
}