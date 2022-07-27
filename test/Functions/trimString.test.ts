import { trim,trimEnd,trimStart } from "../../main";
    
describe("trimString test",()=>{
    it("trimString",()=>{
        const str = ' trim '
        expect(trim(str)).toBe(str.trim())
        expect(trimStart(str)).toBe(str.trimStart())
        expect(trimEnd(str)).toBe(str.trimEnd())
    })
})
    