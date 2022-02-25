# 职责链模式  
用于解决过长`if...else`判断逻辑

```ts
next(param?: Function)
```
添加职责,`next`方法的参数要求是一个函数类型。在职责链运行时均会被传递一个函数方法,该函数是否调用决定职责链下一个职责是否执行。

>注意:调用`next`方法会返回一个新职责对象。
  
```ts
passRequest(param?: any)
```
执行职责链

        
  
**例子**  
<me-embed>const {chain} = require("medash");
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
c.passRequest(2, 23)</me-embed>  

<me-embed>const {chain} = require("medash");
const c = chain((param1, param2, next) => {
    console.log(param1, param2, 'f1');
    next()
})
c.next(() => {
    console.log('没有调用next方法,执行结束!');
}).next((param1, param2, next) => {
    console.log(param1, param2, 'f3');
    console.log(11);
    next()
})
c.passRequest(2, 23)</me-embed>
