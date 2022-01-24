import { chain } from "../../main";
const c = chain((param1, param2, next) => {
    console.log(param1, param2, 'f1');
    next()
})

c.next((param1, param2, next) => {
    console.log(param1, param2, 'f2');
    console.log(10);
    next()
}).next((param1, param2, next) => {
    console.log(param1, param2, 'f3');
    console.log(11);
    next()
})

c.passRequest(2, 23)