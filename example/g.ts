import { debounce } from "../ts-main"
console.log(debounce(() => { }, { immediate: true, wait: 1 }));
console.log(debounce(() => { },2000));
