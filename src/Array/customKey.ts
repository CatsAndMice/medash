import eq from "../Function/eq";
import isEmpty from "../Function/isEmpty";
import isUndefined from "../Function/isUndefined";
import getDeelClone from "../Object/getDeepClone";
import isZeroLen from "./isZeroLen";
type skipTypes = number | string | any[]
type Option = {
    key: string;
    customKey: string;
    skip?: skipTypes;
    isClone?: boolean;
}

function isSkip(value: any, skip: skipTypes) {
    let skipType = Array.isArray(skip);
    if (skipType) {
        return (skip as any[]).includes(value);
    }
    return eq(value, skip)

}

export default (args: { [key: string]: any }[], option: Option | Option[], isClone: boolean = false): any[] => {
    let isArray = Array.isArray(option);
    if (!isArray) {
        option = option as Option;
        isEmpty(option.isClone) ? null : isClone = (option.isClone as boolean);
    }
    return args.map(arg => {
        let customValue: { [key: string]: any } = {};
        arg = isClone ? getDeelClone(arg) : arg;
        if (isArray) {
            (option as Option[]).forEach(opt => {
                let { key, customKey, skip } = opt;
                let argValue = arg[key];
                if (!isSkip(argValue, skip as skipTypes)) {
                    customValue[customKey] = argValue;
                }
            })
            return customValue;
        }
        option = option as Option
        let { key, customKey, skip } = option;
        let argValue = arg[key];
        if (!isSkip(argValue, skip as skipTypes)) {
            customValue[customKey] = argValue;
        }
        return customValue;
    }).filter(val => !isZeroLen(Object.keys(val)))
}