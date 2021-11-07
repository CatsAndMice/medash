import lt from "./lt"
//获取一个两位数的字符串
export default (num: number): string => {
    const absNum = Math.abs(num)
    return lt(absNum, 10) ? `0${absNum}` : String(absNum)
}