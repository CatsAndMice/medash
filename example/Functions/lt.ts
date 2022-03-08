import medash from "../../main"
medash.lt(1, 2)//false
medash.lt('1', 2)//false
medash.lt('2',0)//true
medash.lt(2,-2)//true

console.log(medash.lt(1, 2));
console.log(medash.lt('1', 2));
console.log(medash.lt('2',0));
console.log(medash.lt(2,-2));