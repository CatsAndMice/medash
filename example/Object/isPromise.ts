import { isPromise } from "../../main";
console.log(isPromise(undefined));//false
console.log(isPromise(''));//false
console.log(isPromise([]));//false
const fn = async function () { }
console.log(isPromise(fn));//false
console.log(isPromise(fn()));//true
console.log(isPromise(Promise.resolve));//false
console.log(isPromise(Promise.resolve()));//true



