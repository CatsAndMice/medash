/**
   * 电话号码是否符合正确的格式
   * @param {String} dataSource 电话号码
   * @returns Boolean
   */
const telReg: RegExp = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
export default (tel: string): boolean => {
    return telReg.test(tel)
}