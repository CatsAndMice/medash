import { getValue } from "../../main";
const value = [{ name: 'lihai', age: 20 }, { name: 'java', age: 21 }];
const callBack = (val) => {
    const { name } = val;
    return name === 'lihai'
}
console.log(getValue(value, callBack));

