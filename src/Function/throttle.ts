import { default as Params, params } from "./type";
import eq from '../Function/eq';
import isNull from "../Function/isNull";
import getClone from "../Object/getClone";

/*
* 节流
*/
export default (callBack: () => void, option: Params | number = 1000, immediate: boolean = false) => {
    let isObject = eq(typeof option, 'object') && !isNull(option);
    let timer: any = null;
    let wait = 1000;
    if (isObject) {
        let cloneOption = getClone(params, option)
        immediate = cloneOption.immediate
        wait = cloneOption.wait;
    } else {
        wait = option as number;
    }

    immediate ? callBack() : null;
    return () => {
        if (timer) return
        timer = setTimeout(() => {
            callBack();
            timer = null;
        })
    }
}