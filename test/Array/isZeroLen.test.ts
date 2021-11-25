import { isZeroLen } from "../../main";
    
describe("isZeroLen test",()=>{
    it("isZeroLen",()=>{
        expect(isZeroLen([])).toBeTruthy();
        expect(isZeroLen([1])).toBeFalsy();
        expect(isZeroLen([null])).toBeFalsy()
    })
})
    