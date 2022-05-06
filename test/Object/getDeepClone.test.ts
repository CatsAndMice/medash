import { getDeepClone, isFunc } from "../../main";

describe('clone', () => {
    it('getDeepClone', () => {
        let obj = {
            name: {
                age: 20
            },
            wifi: [1, 2, 3, 4]
        }

        let obj2: { [key: string]: any } = getDeepClone(obj)
        expect(obj).not.toBe(obj2)
        expect(obj).toEqual(obj2)
        expect(obj.name).not.toBe(obj2.name)
        obj.name.age = 21
        expect(obj).not.toEqual(obj2)
    })

    it('object Clone', () => {
        let obj = {
            a: null,
            b: new Date(),
            c: /q/g,
            d: function () { }
        }
        let obj2: { [key: string]: any } = getDeepClone(obj);
        expect(obj).toEqual(obj2);
        expect(isFunc(obj2.d)).toBeTruthy();
    })

    it('object Array', () => {
        let obj = [1, 2, { name: 2, wifi: [2, { name: 'mdash' }] }] as any[]
        let obj2 = getDeepClone(obj);
        expect(obj).toEqual(obj2);
        expect(obj2[2].name).toBe(2);
        expect(obj2[2].wifi === obj[2].wifi).toBeFalsy()
        expect(obj2[2].wifi[1] === obj[2].wifi[1]).toBeFalsy()
        expect(obj2[2].wifi[1]).toEqual(obj[2].wifi[1])
    })
})

