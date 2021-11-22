```js
medash.isFunc(value: any):boolean
```
判断值是否为函数类型

**参数**  
1. `value`(any): 需要判断的值

**返回**  
`boolean:`值为函数类型返回`true`,否则返回`false`  

**例子**
```js
medash.isFunc(() => { });//true
medash.isFunc(1);//false
medash.isFunc('111');//false
medash.isFunc(function () { })//true
medash.isFunc({});//false
```