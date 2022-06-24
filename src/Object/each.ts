import isObject from "./isObject";
import or from "../Functions/or";
import isArray from "../Array/isArray";
import isFunc from "../Functions/isFunc";
export default (origin: { [key: string]: any } | any[], callBack: (key?, value?, self?) => void) => {
    const isArr = isArray(origin)
    if (!or(isObject(origin), isArr)) return;
    if (!isFunc(callBack)) return
    const keys = Object.keys(origin);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callBack(isArr ? i : key, origin[key], origin);
    }
}