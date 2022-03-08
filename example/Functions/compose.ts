import { compose } from "../../main";
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const m1 = (x) => {
    return x + 2
}
const multiplyAndAdd5 = compose(
    m1,
    add5,
    multiply
);
console.log(multiplyAndAdd5(5, 2));// 15