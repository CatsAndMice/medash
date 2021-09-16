const { Clone } = require('../main')
describe('克隆', () => {
    it('㳀克隆', () => {
        let obj = {
            name: "㳀克隆",
            age: 20,
            childrens: {
                name: 'children'
            }
        }
        let cloneObj = Clone.getClone(obj);
        cloneObj.age = 10
        expect(obj.age).not.toBe(cloneObj.age);
        obj.childrens.name = Math.random();
        //toEqual 引用值循环比较
        expect(obj.childrens).toEqual(cloneObj.childrens)
        expect(obj.childrens.name).toEqual(cloneObj.childrens.name)

        const arr1 = [2, 3, { name: 22 }]
        expect(Clone.getClone(arr1)).not.toBe(arr1)
        const arr2 = Clone.getClone(arr1)
        expect(arr2[0]).toBe(arr1[0])
        arr2[2].name = '22'
        expect(arr2[2].name).toBe(arr1[2].name);
        expect(arr2).toEqual(arr1)
    })

    it('深克隆', () => {
        let obj = {
            name: {
                age: 20
            },
            wifi: [1, 2, 3, 4]
        }

        let obj2 = Clone.getDeelClone(obj)
        expect(obj).not.toBe(obj2)
        expect(obj).toEqual(obj2)
        expect(obj.name).not.toBe(obj2.name)
        obj.name.age = 21
        expect(obj).not.toEqual(obj2)
    })

})