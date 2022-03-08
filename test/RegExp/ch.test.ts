import { ch } from "../../main";

describe("ch test", () => {
    it("ch", () => {
        expect(ch('你好').isCh).toBeTruthy();
        expect(ch('av你好').isCh).toBeTruthy();
        expect(ch('av').isCh).toBeFalsy();
        expect(ch('').isCh).toBeFalsy();
        expect(ch('123').isCh).toBeFalsy();
        expect(ch('12李3').isCh).toBeTruthy();
    })
})
