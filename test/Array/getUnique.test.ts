import { getUnique } from "../../main";
it('getUnique', () => {
    let obj = { name: 1, age: 2 }
    let unique = [1, 2, 3, 2, 31, 1, obj, obj];
    expect(getUnique(unique)).toEqual(Array.from(new Set(unique)))
    expect(getUnique([1,{age:20},{age:1},{age:20}])).toEqual([1,{age:20},{age:1}])
})