import lt from "./lt"
// 将数字转换成一个千位符并返回
export default (num: number, char: string = ','): string => {
    if (lt(num, 1000)) {
        return String(num)
    }
    // Number.prototype.toLocaleString 可实现千位符
    // 去除小数点后面的数
    const numStrs = String(num).split('.')
    const thousandsChar = numStrs[0].replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
        return $1 + char
    })
    return numStrs[1] ? [thousandsChar, numStrs[1]].join('.') : thousandsChar
}