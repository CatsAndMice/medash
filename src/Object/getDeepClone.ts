import isNull from "../Functions/isNull";
import isBrowser from '../Functions/isBrowser';
import isObject from "../Object/isObject"
import isArray from "../Array/isArray";

export default function getDeepClone(origin: { [key: string]: any }, target: { [key: string]: any } | [any] = {}): object | any[] {
    let keys
    if (isObject(origin)) {
        target = {}
        keys = Object.keys(origin)
    } else if (isArray(origin)) {
        target = []
        keys = origin
    } else {
        //原始值直接返回
        return origin
    }

    for (let index = 0; index < keys.length; index++) {
        let key = isArray(origin) ? index : keys[index];
        let value = origin[key]
        let type = typeof value;
        if (type === "object") {
            if (isNull(value)) {
                target[key] = value;
                continue
            }

            //Date
            if (value instanceof Date) {
                target[key] = new Date(value.getTime())
                continue
            }

            //正则
            if (value instanceof RegExp) {
                target[key] = new RegExp(value)
                continue
            }


            if (isBrowser()) {
                if (value instanceof Element) {
                    target[key] = value.cloneNode(true);
                    continue
                }
            }

            target[key] = Array.isArray(value) ? getDeepClone(value, []) : getDeepClone(value);
            continue
        }
        target[key] = value;
    }
    return target;
}
