import { isDate } from "../../main";
    
describe("isDate test",()=>{
    it("isDate",()=>{
        expect(isDate(1)).toBeFalsy()
        expect(isDate('1')).toBeFalsy()
        expect(isDate(/12/)).toBeFalsy()
        expect(isDate([])).toBeFalsy()
        expect(isDate({})).toBeFalsy()
        expect(isDate(Date)).toBeFalsy()
        expect(isDate(new Date)).toBeTruthy()
    })
})
    