import { debounce, throttle } from "../main"
let fn = debounce(() => console.log(11));
let fn1 = throttle(() => {
    console.log(222);
})
fn()
fn1()
fn1()

