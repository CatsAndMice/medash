```js
medash.isUndefined(value:any): boolean 
```
传入的值是否为`undefined`


**参数**  
1. `value`(any): 需要判断是否为`undefined`的值 

**返回**  
`boolean:` 值为`undefined`返回`true`,否则返回`false`

**例子**
```js
medash.isUndefined(0);//false
medash.isUndefined(undefined);//true
medash.isUndefined({});//false
medash.isUndefined([]);//false
medash.isUndefined('');//false
```