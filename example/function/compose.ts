import { compose } from "../../main";
const f1 = (p) => {
    return p + 1;
}
const f2 = (p) => {
    return p * 1;
}


console.log(compose(f1, f2, f2, f2)(1));