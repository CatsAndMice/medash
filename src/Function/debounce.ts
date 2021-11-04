import eq from '../Function/eq';
import isNull from "../Function/isNull"

type Option = {
    wait: number;
    immediate: boolean;
}
export default (callBack: () => void, option: Option | number = 1000, immediate: boolean = false) => {
    let isObject = eq(typeof option, 'object') && !isNull(option);
    let timer: any = null;
    let wait = 1000;
    if (isObject) {
        if (option.hasOwnProperty('immediate')) {
            option = option as Option
            immediate = option.immediate
            wait = option.wait;
        }
    }
    wait = option as number;
    immediate ? callBack() : null;
    return () => {
        timer && clearTimeout(timer);
        timer = setTimeout(callBack, wait);
    }
}