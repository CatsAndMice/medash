import isObject from "./isObject";
export default (origin: { [key: string]: any }, callBack: (key?, value?, self?) => boolean) => {
    if (!isObject(origin)) return false;
    const keys = Object.keys(origin);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const isSome = callBack(key, origin[key], origin);
        if (isSome) return true;
    }
    return false;
}