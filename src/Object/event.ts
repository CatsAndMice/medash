import isEmpty from "../Function/isEmpty";
import isFunc from "../Function/isFunc";
import gt from "../Function/gt";
import isLenZero from "../Array/isZeroLen";
import eq from "../Function/eq";

let maxCache: number = 15;
const events = new Map();

function _isHaveKeyAndValue(key: string, value: () => void): boolean {
    return !isEmpty(key) && isFunc(value);
}

function isSomeFunction(args: any[], value): boolean {
    return args.some(arg => {
        return eq(arg, value)
    })
}

function _addEvent(key: string, value: () => void, once: boolean = false) {
    if (_isHaveKeyAndValue(key, value)) {
        once && isFunc(value) && ((value as any).once = true)
        if (events.has(key)) {
            const callBacks = events.get(key)
            if (!callBacks.includes(value) && !isSomeFunction(callBacks, value)) {
                const keyLen = callBacks.length
                if (gt(keyLen, maxCache)) {
                    console.warn('已超出最大缓存量!请注意内存泄露');
                    return
                }
                callBacks.push(value);
            }
            return;
        }
        events.set(key, [value]);
    }
}

function _deleteKey(key: string) {
    let values = events.get(key)
    if (isLenZero(values)) {
        events.delete(key);
    }
}


export function on(key: string, value: (rest?:any) => void) {
    _addEvent(key, value)
}

export function once(key: string, value: (rest?:any) => void) {
    _addEvent(key, value, true)
}

export function trigger(key: string,...rest:any[]) {
    if (isEmpty(key)) return;
    const values = events.get(key);
    if (isEmpty(values)) return;

    for (let i = 0; i < values.length; i++) {
        let value = values[i]
        isFunc(value) && value(...rest);
        //删除原数组元素,会造成原数组索引变化 
        value.once && values.splice(i, 1) && trigger(key);
        _deleteKey(key);
    }

}

export function remove(key) {
    !isEmpty(key) && events.has(key) && events.delete(key);
}

export function setMaxCache(num: number) {
    maxCache = num
}

export function getMaxCache() {
    return maxCache;
}

export function watchCache() {
    console.info('缓存事件:', events);
    return events
}

export default {
    on,
    once,
    trigger,
    remove,
    setMaxCache,
    getMaxCache,
    watchCache
}