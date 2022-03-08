import { isIos } from "../../main";
    
describe("isIos test",()=>{
    it("isIos",()=>{
        expect(isIos()).toBeFalsy();
    })
})
    