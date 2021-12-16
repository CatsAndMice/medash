import { isSpecialChar } from "../../main";

describe("isSpecialChar test", () => {
    it("isSpecialChar", () => {
        ///[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g
        expect(isSpecialChar('&')).toBeTruthy();
        expect(isSpecialChar('`')).toBeTruthy();
        expect(isSpecialChar('~')).toBeTruthy();
        expect(isSpecialChar('!')).toBeTruthy();
        expect(isSpecialChar('@')).toBeTruthy();
        expect(isSpecialChar('#')).toBeTruthy();
        expect(isSpecialChar('$')).toBeTruthy();
        expect(isSpecialChar('%')).toBeTruthy();
        expect(isSpecialChar('^')).toBeTruthy();
        expect(isSpecialChar('&')).toBeTruthy();
        expect(isSpecialChar('*')).toBeTruthy();
        expect(isSpecialChar('(')).toBeTruthy();
        expect(isSpecialChar(')')).toBeTruthy();
        expect(isSpecialChar('_')).toBeTruthy();
        expect(isSpecialChar('-')).toBeTruthy();
        expect(isSpecialChar('+')).toBeTruthy();
        expect(isSpecialChar('=')).toBeTruthy();
        expect(isSpecialChar('<')).toBeTruthy();
        expect(isSpecialChar('>')).toBeTruthy();
        expect(isSpecialChar('?')).toBeTruthy();
        expect(isSpecialChar(':')).toBeTruthy();
        expect(isSpecialChar('"')).toBeTruthy();
        expect(isSpecialChar('{')).toBeTruthy();
        expect(isSpecialChar('}')).toBeTruthy();
        expect(isSpecialChar('|')).toBeTruthy();
        expect(isSpecialChar(',')).toBeTruthy();
        expect(isSpecialChar('/')).toBeTruthy();
        expect(isSpecialChar(';')).toBeTruthy();
        expect(isSpecialChar("\\")).toBeTruthy();
        expect(isSpecialChar('：')).toBeTruthy();
        expect(isSpecialChar('“')).toBeTruthy();
        expect(isSpecialChar('”')).toBeTruthy();
        expect(isSpecialChar('！')).toBeTruthy();
        expect(isSpecialChar("【")).toBeTruthy();
        expect(isSpecialChar('】')).toBeTruthy();
        expect(isSpecialChar('、')).toBeTruthy();
        expect(isSpecialChar('；')).toBeTruthy();
        expect(isSpecialChar(']')).toBeTruthy();
        expect(isSpecialChar('·')).toBeTruthy();
        expect(isSpecialChar('~')).toBeTruthy();
        expect(isSpecialChar('！')).toBeTruthy();
        expect(isSpecialChar("@")).toBeTruthy();
        expect(isSpecialChar('#')).toBeTruthy();
        expect(isSpecialChar('￥')).toBeTruthy();
        expect(isSpecialChar('%')).toBeTruthy();
        expect(isSpecialChar('……')).toBeTruthy();
        expect(isSpecialChar('*')).toBeTruthy();
        expect(isSpecialChar("（")).toBeTruthy();
        expect(isSpecialChar('）')).toBeTruthy();
        expect(isSpecialChar('——')).toBeTruthy();
        expect(isSpecialChar('-')).toBeTruthy();
        expect(isSpecialChar('《')).toBeTruthy();
        expect(isSpecialChar("》")).toBeTruthy();
        expect(isSpecialChar('？')).toBeTruthy();
        expect(isSpecialChar('[')).toBeTruthy();
        expect(isSpecialChar('‘')).toBeTruthy();
        expect(isSpecialChar('’')).toBeTruthy();
        expect(isSpecialChar('”')).toBeTruthy();
        expect(isSpecialChar('，')).toBeTruthy();
        expect(isSpecialChar("。")).toBeTruthy();
        expect(isSpecialChar('、')).toBeTruthy();

    })

    it('more ctar', () => {
        expect(isSpecialChar('我没有特殊字符')).toBeFalsy();
        expect(isSpecialChar('我是&')).toBeTruthy();
        expect(isSpecialChar('I am .')).toBeTruthy();
    })
})
