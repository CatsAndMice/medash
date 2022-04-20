import isFunc from "../Functions/isFunc"
import each from "./each"
import isObject from "./isObject";
export default (value: Object): Map<any, any> | undefined => {
    if (!isObject(value)) {
        return
    }
    if (isFunc(Object.entries)) {
        return new Map(Object.entries(value));
    }
    const map = new Map();
    each(value, (key, value) => {
        map.set(key, value);
    })
    return map
}