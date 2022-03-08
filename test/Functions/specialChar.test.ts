import { specialChar } from "../../main";

describe("isSpecialChar test", () => {
    it("isSpecialChar", () => {
        ///[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g
        expect(specialChar('&').isSpecialChar).toBeTruthy();
        expect(specialChar('`').isSpecialChar).toBeTruthy();
        expect(specialChar('~').isSpecialChar).toBeTruthy();
        expect(specialChar('!').isSpecialChar).toBeTruthy();
        expect(specialChar('@').isSpecialChar).toBeTruthy();
        expect(specialChar('#').isSpecialChar).toBeTruthy();
        expect(specialChar('$').isSpecialChar).toBeTruthy();
        expect(specialChar('%').isSpecialChar).toBeTruthy();
        expect(specialChar('^').isSpecialChar).toBeTruthy();
        expect(specialChar('&').isSpecialChar).toBeTruthy();
        expect(specialChar('*').isSpecialChar).toBeTruthy();
        expect(specialChar('(').isSpecialChar).toBeTruthy();
        expect(specialChar(')').isSpecialChar).toBeTruthy();
        expect(specialChar('_').isSpecialChar).toBeTruthy();
        expect(specialChar('-').isSpecialChar).toBeTruthy();
        expect(specialChar('+').isSpecialChar).toBeTruthy();
        expect(specialChar('=').isSpecialChar).toBeTruthy();
        expect(specialChar('<').isSpecialChar).toBeTruthy();
        expect(specialChar('>').isSpecialChar).toBeTruthy();
        expect(specialChar('?').isSpecialChar).toBeTruthy();
        expect(specialChar(':').isSpecialChar).toBeTruthy();
        expect(specialChar('"').isSpecialChar).toBeTruthy();
        expect(specialChar('{').isSpecialChar).toBeTruthy();
        expect(specialChar('}').isSpecialChar).toBeTruthy();
        expect(specialChar('|').isSpecialChar).toBeTruthy();
        expect(specialChar(',').isSpecialChar).toBeTruthy();
        expect(specialChar('/').isSpecialChar).toBeTruthy();
        expect(specialChar(';').isSpecialChar).toBeTruthy();
        expect(specialChar("\\").isSpecialChar).toBeTruthy();
        expect(specialChar('：').isSpecialChar).toBeTruthy();
        expect(specialChar('“').isSpecialChar).toBeTruthy();
        expect(specialChar('”').isSpecialChar).toBeTruthy();
        expect(specialChar('！').isSpecialChar).toBeTruthy();
        expect(specialChar("【").isSpecialChar).toBeTruthy();
        expect(specialChar('】').isSpecialChar).toBeTruthy();
        expect(specialChar('、').isSpecialChar).toBeTruthy();
        expect(specialChar('；').isSpecialChar).toBeTruthy();
        expect(specialChar(']').isSpecialChar).toBeTruthy();
        expect(specialChar('·').isSpecialChar).toBeTruthy();
        expect(specialChar('~').isSpecialChar).toBeTruthy();
        expect(specialChar('！').isSpecialChar).toBeTruthy();
        expect(specialChar("@").isSpecialChar).toBeTruthy();
        expect(specialChar('#').isSpecialChar).toBeTruthy();
        expect(specialChar('￥').isSpecialChar).toBeTruthy();
        expect(specialChar('%').isSpecialChar).toBeTruthy();
        expect(specialChar('……').isSpecialChar).toBeTruthy();
        expect(specialChar('*').isSpecialChar).toBeTruthy();
        expect(specialChar("（").isSpecialChar).toBeTruthy();
        expect(specialChar('）').isSpecialChar).toBeTruthy();
        expect(specialChar('——').isSpecialChar).toBeTruthy();
        expect(specialChar('-').isSpecialChar).toBeTruthy();
        expect(specialChar('《').isSpecialChar).toBeTruthy();
        expect(specialChar("》").isSpecialChar).toBeTruthy();
        expect(specialChar('？').isSpecialChar).toBeTruthy();
        expect(specialChar('[').isSpecialChar).toBeTruthy();
        expect(specialChar('‘').isSpecialChar).toBeTruthy();
        expect(specialChar('’').isSpecialChar).toBeTruthy();
        expect(specialChar('”').isSpecialChar).toBeTruthy();
        expect(specialChar('，').isSpecialChar).toBeTruthy();
        expect(specialChar("。").isSpecialChar).toBeTruthy();
        expect(specialChar('、').isSpecialChar).toBeTruthy();

    })

    it('more ctar', () => {
        expect(specialChar('我没有特殊字符').isSpecialChar).toBeFalsy();
        expect(specialChar('我是&').isSpecialChar).toBeTruthy();
        expect(specialChar('I am .').isSpecialChar).toBeTruthy();
    })

    it('value', () => {
        expect(specialChar('我没有特殊字符').value).toBe('我没有特殊字符');
        expect(specialChar('我*是&').value).toBe('我是');
        expect(specialChar('I am .').value).toBe('I am ');
        expect(specialChar('我*是&。').value).toBe('我是');
        expect(specialChar('I am .-。').value).toBe('I am ');
    })
})
