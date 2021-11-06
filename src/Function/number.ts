import lt from "./lt"
export const getNumber = (min: number, max: number): number | void => {
    return max > min ? Math.round((Math.random() * (max - min)) + min) : console.warn('max值小于min,参数不合法!')
}

//获取一个两位数的字符串
export const getGtTenStr = (num: number): string => {
    const absNum = Math.abs(num)
    return lt(absNum, 10) ? `0${absNum}` : String(absNum)
}

// 将数字转换成一个千位符并返回
export const getThousandsChar = (num: number, char: string = ','): string => {
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