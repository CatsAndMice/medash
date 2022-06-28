
const telReg: RegExp = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
export default (tel: string | number): boolean => {
    return telReg.test(String(tel))
}