import getType from "../Functions/getType"
import isObject from "../Object/isObject"
import isArray from "../Array/isArray"
import or from "../Functions/or"
import each from "./each"
import eq from "../Functions/eq"
import toArray from "../Array/toArray"
import isFunc from "../Functions/isFunc"
/**
 * 深度冻结Object、Set、Map实例对象
 */
const types = [getType([]), getType({}), getType(new Map), getType(new Set)]
const isSet = (obj) => eq(getType(obj), 'Set')
const isMap = (obj) => eq(getType(obj), 'Map')
const keys = ['add', 'delete', 'set']

export default function deepFreeze(obj) {
    const type = getType(obj)
    if (!types.includes(type)) return obj
    if (or(isObject(obj), isArray(obj))) {
        each(obj, (key, value) => {
            if (typeof value === "object") {
                obj[key] = deepFreeze(value)
            }
        })
        return Object.freeze(obj)
    }

    if (or(isMap(obj), isSet(obj))) {
        toArray(obj.values()).forEach(value => {
            deepFreeze(value)
        })
        return new Proxy(obj, {
            get(target, key) {
                if (keys.includes(key as string)) {
                    throw new Error('只读，不允许修改!')
                }
                if (eq(key, 'size')) {
                    return Reflect.get(target, key, target)
                }
                //当访问set.add时，add等方法并没有执行，真正使其执行的是set.add(1)，因此无论怎么修改receiver,add方法执行时this都会指向代理对象p
                return isFunc(target[key]) ? target[key].bind(target) : target[key]
            },
            set() {
                throw new Error('只读，不允许修改或添加属性!')
                return false
            }
        })
    }
}