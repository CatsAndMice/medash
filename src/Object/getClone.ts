export default (origin: { [key: string]: any } | any[], target = {}) => {
    let isArray = Array.isArray(origin);
    let keys = Object.keys(origin);
    if (isArray) {
        return keys.map(key => origin[key]);
    }
    return Object.assign(target, origin);
}