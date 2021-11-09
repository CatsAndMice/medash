import isFunc from "./isFunc";

/**
 * 比较值是否相等
 */
export default function eq(value: any, target: any): boolean {
    if (value === target) {
        return true;
    }

    //比较类型为Date对象时，比较时间戳格式值
    if (value instanceof Date && target instanceof Date) {
        return value.getTime() === target.getTime();
    }

    //正则
    if (value instanceof RegExp && target instanceof RegExp) {
        return String(value) === String(target)
    }

    //函数 
    if (isFunc(value) && isFunc(target)) {
        let valueStr = value.toString();
        let targetStr = target.toString();
        return valueStr === targetStr;
    }


    //排除其中值有为空,全部为空的情况
    if (!target || !value || (typeof target !== "object" && typeof value !== "object")) {
        return value === target;
    }


    //引用类型
    if (value.prototype !== target.prototype) return false;
    const valueKeys = Object.keys(value);
    const targetKeys = Object.keys(target);
    if (valueKeys.length !== targetKeys.length) return false;
    return valueKeys.every(key => eq(value[key], target[key]));
}