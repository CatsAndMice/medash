import isEmptyObj from "./isEmptyObj";
export default (origin: { [key: string]: any }, callBack: (key?, value?, self?) => void) => {
    if (isEmptyObj(origin)) {
        return;
    }
    const keys = Object.keys(origin);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callBack(key, origin[key], origin);
    }
}