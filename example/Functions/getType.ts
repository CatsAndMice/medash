import { getType } from "../../main";
console.log(getType(null) === 'null');
console.log(getType(undefined) === 'undefined');
console.log(getType(Symbol(1)) === 'symbol');
console.log(getType(1) === 'number');
console.log(getType('1') === 'string');
console.log(getType(new String('')) === 'String');
console.log(getType(new Number('')) === 'Number');
console.log(getType({}) === 'Object');
console.log(getType([]) === 'Array');
console.log(getType(/1/g) === 'RegExp');
console.log(getType(new Date()) === 'Date');







