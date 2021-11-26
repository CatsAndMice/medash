export default (origin: { [key: string]: any }):boolean => {
    let isTypeObj = toString.call(origin) === '[object Object]';
    if (!isTypeObj) {
        return false;
    }
    let keys = Object.keys(origin);
    let len = keys.length;
    return len === 0;
}