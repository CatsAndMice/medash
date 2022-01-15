import { isObject } from "../../main";
    
describe("isObject test",()=>{
    it("isObject",()=>{
        expect(isObject({})).toBeTruthy();
        expect(isObject([])).toBeFalsy();
        expect(isObject(/^122$/)).toBeFalsy();
        expect(isObject(1)).toBeFalsy();
        expect(isObject('1')).toBeFalsy();
        expect(isObject(null)).toBeFalsy();
        expect(isObject(undefined)).toBeFalsy();
    })
})
    