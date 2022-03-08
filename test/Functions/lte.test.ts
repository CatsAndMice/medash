import { lte } from "../../main";
    
describe("lte test",()=>{
    it("lte",()=>{
        expect(lte(1, 1)).toBeTruthy();
        expect(lte(2, 1)).toBeFalsy();
        expect(lte(0, 1)).toBeTruthy();
        expect(lte(-1,0)).toBeTruthy();
    })
})
    