import { getClone } from "../../main";
let arr = [{ name: 20 }, 1, [2]]
let clone = getClone(arr)
console.log(arr[1] === clone[1]);
console.log(arr[0] === clone[0]);


