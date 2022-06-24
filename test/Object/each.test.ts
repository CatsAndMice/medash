import { each } from "../../main";

describe("each test", () => {
    it("each Emtpy", () => {
        let i = 0;
        each({}, () => {
            i++;
        })
        expect(i).toBe(0)
    })

    it('each', () => {
        const obj = { name: 'lihai', age: 20 };
        const keys: any[] = [];
        const values: any[] = [];
        each(obj, (key, value) => {
            keys.push(key);
            values.push(value)
        })
        expect(keys).toEqual(Object.keys(obj))
        expect(values).toEqual(Object.values(obj))
    })

    it('array', () => {
      const arr = [1,2,'1',{name:"lihai"}]
      each(arr, (key, value) => {
        expect(value).toBe(arr[key])
      })
    })

})
