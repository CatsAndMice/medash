import and from "./and"
import isEmpty from "./isEmpty"
import isStr from "./isStr"
export default (value: unknown) => {
    const reg = /^\d+$/
    if (isEmpty(value)) {
        return 0
    }
    if (and(isStr(value), reg.test(value as string))) {
        return Number(value) 
    }

    return parseFloat(value as string)
}