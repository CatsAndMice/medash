const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
/**
   * 电子邮件是否符合正确的格式
   */
export default (value: string): boolean => {
    return emailReg.test(value)
}