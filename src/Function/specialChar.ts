type result = {
    isSpecialChar: boolean,
    value: string,
    regExp: RegExp
}
const regChar = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/;
export default (value: string, reg: RegExp = regChar): result => {
    return {
        isSpecialChar: reg.test(value),
        value: value.replace(new RegExp(regChar, 'g'), ''),
        regExp: regChar
    };
}