import isObject from "./isObject";
import or from "../Functions/or";
import isArray from "../Array/isArray";
import isFunc from "../Functions/isFunc";
// TODO:some兼容数组
// TODO:新增filter 兼容数组
// 

type obj = { [key: string]: any }
export default <T extends obj | any[]>(origin: T, callBack: (key?, value?, self?: T) => boolean) => {
    const isArr = isArray(origin)
    if (!or(isObject(origin), isArr)) return false
    if (!isFunc(callBack)) return false
    const keys = Object.keys(origin);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const isSome = callBack(isArr ? i : key, origin[key], origin);
        if (isSome) return true;
    }
    return false;
}