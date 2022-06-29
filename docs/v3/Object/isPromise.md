判断是否为`Promise`  
  
**添加版本**  
v3.3.5  

**参数**   
promise(any):任意类型参数  

**返回**  
`Boolean`:true为参数类型是一个`Promise`类型对象；否则不是。  

**例子**  
<me-embed>const  { isPromise }  = require("medash")
console.log(isPromise(undefined));//false
console.log(isPromise(''));//false
console.log(isPromise([]));//false
const fn = async function () { }
console.log(isPromise(fn));//false
console.log(isPromise(fn()));//true
console.log(isPromise(Promise.resolve));//false
console.log(isPromise(Promise.resolve()));//true</me-embed>  
