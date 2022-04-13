import { isStr } from "../../main";
    
describe("isStr test",()=>{
    it("isStr",()=>{
        expect(isStr('')).toBeTruthy()
        expect(isStr(0)).toBeFalsy()
        expect(isStr({})).toBeFalsy()
        expect(isStr([])).toBeFalsy()
        expect(isStr(new Set())).toBeFalsy()
    })
})
    