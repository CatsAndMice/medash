import isArray from "../Array/isArray";
import or from "../Functions/or";
import isObject from "./isObject";
export default (origin: { [key: string]: any }, callBack: (key?, value?, self?) => void) => {
    if (!or(isObject(origin), isArray(origin))) return;
    const keys = Object.keys(origin);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callBack(key, origin[key], origin);
    }
}