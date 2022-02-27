import and from "../Function/and";
import eq from "../Function/eq";
import isFunc from "../Function/isFunc";
import isNull from "../Function/isNull";
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