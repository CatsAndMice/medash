import isFunc from "../Functions/isFunc"
import each from "./each"
export default (value: Object): Map<string, any> => {
    if (isFunc(Object.entries)) {
        return new Map(Object.entries(value));
    }
    const map = new Map();
    each(value, (key, value) => {
        map.set(key, value);
    })
    return map
}