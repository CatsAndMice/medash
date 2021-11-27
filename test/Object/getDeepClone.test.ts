import { getDeelClone, isFunc } from "../../main";

describe('clone', () => {
    it('getDeelClone', () => {
        let obj = {
            name: {
                age: 20
            },
            wifi: [1, 2, 3, 4]
        }

        let obj2: { [key: string]: any } = getDeelClone(obj)
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
        let obj2: { [key: string]: any } = getDeelClone(obj);
        expect(obj).toEqual(obj2);
        expect(isFunc(obj2.d)).toBeTruthy();
    })
})

