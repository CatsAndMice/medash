import isZeroLen from "../Array/isZeroLen";
import isEmpty from "./isEmpty";
import isFunc from "./isFunc";
import getType from './getType'

function getArrayQuery(key: string, values: any[]) {
    return values.map((value) => {
        if (isEmpty(value)) return;
        const types = ['number', 'string', 'boolean'];
        const type = getType(value);
        return types.includes(type) ? `${key}=${value}&` : null;
    }).filter(val => val).join('')
}

export default (params: { [key: string]: any } = {}) => {
    let keys = Object.keys(params);
    let values = ''
    if (isZeroLen(keys)) {
        return '';
    }
    keys.forEach((key) => {
        let value = params[key];
        if (isEmpty(value)) return;
        //函数不拼接
        if (isFunc(value)) return;
        //嵌套的对象不再拼接
        if (getType(value) === 'Object') return;
        values += Array.isArray(value) ? getArrayQuery(key, value) : `${key}=${value}&`;
    })

    return values.replace(/&$/g, '');
}
