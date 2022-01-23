import { chain } from "../../main";
const c = chain((param1, param2, next) => {
    console.log(param1, param2, 'f1');
})
c.next((param1, param2, next) => {
    console.log(param1, param2, 'f2');
    console.log(next());
})

c.passRequest(2, 23)