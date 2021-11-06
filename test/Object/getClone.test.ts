import { getClone } from "../../main";

it('getClone Object', () => {
    let obj = {
        name: "㳀克隆",
        age: 20,
        childrens: {
            name: 'children'
        }
    }
    let cloneObj = getClone(obj);
    cloneObj.age = 10
    expect(obj.age).not.toBe(cloneObj.age);
    obj.childrens.name = 'childrens';
    expect(obj.childrens).toEqual(cloneObj.childrens)
    expect(obj.childrens.name).toEqual(cloneObj.childrens.name)
})

it('getClone Array', () => {
    const arr1: [number, number, { [key: string]: any }] = [2, 3, { name: 22 }]
    const arr2 = getClone(arr1)
    expect(getClone(arr1)).not.toBe(arr1)
    expect(arr2[2]).toBe(arr1[2])
    arr2[2].name = 200
    expect(arr2[2].name).toBe(arr1[2].name);
    expect(arr2).toEqual(arr1)
})

