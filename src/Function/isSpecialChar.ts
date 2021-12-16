const regChar = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/;
export default (value: string, reg: RegExp = regChar) => {
    return reg.test(value);
}