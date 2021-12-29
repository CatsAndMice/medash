import { getValue } from "../../main";
import { eq } from "../../main"

describe("getValue test", () => {
    it("getValue", () => {
        const item = { name: 'scirpt', age: 21 }
        const data = [{ name: 'lihai', age: 20 }, { name: 'java', age: 23 }, item];
        const value = getValue(data, (val) => {
            const { age } = val;
            return eq(age, 21)
        })
        expect(value).toEqual(item)
    })

    it("getValue undefined", () => {
        const item = { name: 'scirpt', age: 21 }
        const data = [{ name: 'lihai', age: 20 }, { name: 'java', age: 23 }, item];
        const value = getValue(data, (val) => {
            const { age } = val;
            return eq(age, 31)
        })
        expect(value).toBeUndefined()
    })
})
