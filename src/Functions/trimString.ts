type TrimType = 'trim' | 'trimStart' | 'trimEnd';
const trimString = (trimType: TrimType = 'trim') => {
    return (str: string) => {
        str = String(str)
        return str[trimType]()
    }
}

/**
 * @use medash.trim(str:string):string
 * @desc 修剪字符串两端的空字符
 * @version v3.3.0
 * @param str(any):任意类型值
 * @return (string): 已两端已修剪的字符串
 * @example 
 * trim(' trim ')//trim
 */
export const trim = trimString()

/**
 * @use medash.trimStart(str:string):string
 * @desc 修剪字符串前端的空字符
 * @version v3.3.0
 * @param str(any):任意类型值
 * @return (string): 前端已修剪的字符串
 * @example 
 * trimStart(' trim ')//'trim '
 */
export const trimStart = trimString('trimStart')

/**
 * @use medash.trimEnd(str:string):string
 * @desc 修剪字符串后端的空字符
 * @version v3.3.0
 * @param str(any):任意类型值
 * @return (string): 后端已修剪的字符串
 * @example trimEnd(' trim ')//' trim'
 */
export const trimEnd = trimString('trimEnd')