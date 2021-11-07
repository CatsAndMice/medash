import isEmpty from "./isEmpty";
export default (params: { [key: string]: any } = {}) => {
    let keys = Object.keys(params);
    let values = '?'
    keys.forEach((key) => {
        let value = params[key];
        if (isEmpty(value)) return;
        values += `${key}=${value}&`;
    })
    return values.replace(/&$/g, '');
}
