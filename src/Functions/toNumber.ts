import and from "./and"
import isEmpty from "./isEmpty"
import isStr from "./isStr"
import isDate from "../Date/isDate"

export default (value: unknown) => {
    if(isDate(value)){
       return (value as Date).getTime()
    }
    const reg = /^\d+$/
    if (isEmpty(value)) {
        return 0
    }
    if (and(isStr(value), reg.test(value as string))) {
        return Number(value) 
    }

    return parseFloat(value as string)
}