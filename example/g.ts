import { debounce, customKey } from "../main"
let a = [{ name: 2, sex: 'lihai' }]
console.log(customKey(a, [{ key: 'name', customKey: 'age', skip: 2 }, { key: 'sex', customKey: 'name' }]));

