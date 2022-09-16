import { toBoolean } from "../../main";
    
describe("toBoolean test",()=>{
    it("toBoolean",()=>{
        expect(toBoolean(0)).toBeFalsy()
        expect(toBoolean(1)).toBeTruthy()
        expect(toBoolean('false')).toBeFalsy()
        expect(toBoolean('FALSE')).toBeFalsy()
        expect(toBoolean('True')).toBeTruthy()
        expect(toBoolean(undefined)).toBeFalsy()
        expect(toBoolean(NaN)).toBeFalsy()
        expect(toBoolean([])).toBeTruthy()
        expect(toBoolean(true)).toBeTruthy()
        expect(toBoolean(false)).toBeFalsy()
    })
})
    