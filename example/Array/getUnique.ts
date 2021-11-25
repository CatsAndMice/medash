import { getUnique } from "../../main";
console.log(getUnique([11, 11, 1, 1, 2, 2]));
console.log(getUnique([-1, -1, 2]));
console.log(getUnique([{ name: 'name' }, { age: 20 }, 1]));
console.log(getUnique([{ name: 'name' }, { name: 'name' }, 1]));

