import isObject from "./isObject";
export default (origin: { [key: string]: any }): boolean => {
    const isTypeObj = isObject(origin);
    if (!isTypeObj) return false;
    const keys = Object.keys(origin);
    const len = keys.length;
    return len === 0;
}