const chReg = /[\u4E00-\u9FA5]/g;
//匹配部分emoji表情，并不是全部，例如:🤏
const emojiReg = /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/g;
export default (value: string) => {
    value = value.replace(chReg, " ");
    value = value.replace(emojiReg, " ")
    return value.length;
}