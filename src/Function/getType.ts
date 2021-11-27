import isFunc from './isFunc';
import isNull from './isNull';
import isUndefined from './isUndefined';
export default (value: any) => {
    if (isNull(value)) {
        return 'null';
    }
    if (isUndefined(value)) {
        return 'undefined';
    }

    if (isFunc(value)) {
        return 'function';
    }

    const types: Set<string> = new Set(['number', 'string', 'symbol']);
    const baseType = typeof value;
    const reg = /^\[object\s(\w+)\]$/;
    const type = toString.call(value);
    if (types.has(baseType)) {
        return baseType;
    }

    return (reg.exec(type) as any[])[1]
}