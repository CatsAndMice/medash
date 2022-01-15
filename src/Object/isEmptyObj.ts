import isObject from "./isObject";
export default (origin: { [key: string]: any }): boolean => {
    let isTypeObj = isObject(origin);
    if (!isTypeObj) {
        return false;
    }
    let keys = Object.keys(origin);
    let len = keys.length;
    return len === 0;
}