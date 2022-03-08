import medash from "../../main"
console.log(medash.isFunc(() => { }));
console.log(medash.isFunc(1));
console.log(medash.isFunc('111'));
console.log(medash.isFunc(function () { }));
console.log(medash.isFunc({}));



