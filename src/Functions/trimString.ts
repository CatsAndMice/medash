type TrimType = 'trim' | 'trimStart' | 'trimEnd';
const trimString = (trimType: TrimType = 'trim') => {
    return (str: string) => {
        str = String(str)
        return str[trimType]()
    }
}

/**
 * @desc 修剪字符串两端的空字符
 * @version v3.3.6
 * @param str(any):任意类型值
 * @return (string): 已两端已修剪的字符串
 */
export const trim = trimString()

/**
 * @desc 修剪字符串前端的空字符
 * @version v3.3.6
 * @param str(any):任意类型值
 * @return (string): 前端已修剪的字符串
 */
export const trimStart = trimString('trimStart')

/**
 * @desc 修剪字符串后端的空字符
 * @version v3.3.6
 * @param str(any):任意类型值
 * @return (string): 后端已修剪的字符串
 */
export const trimEnd = trimString('trimEnd')