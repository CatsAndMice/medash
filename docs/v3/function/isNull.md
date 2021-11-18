```js
medash.isNull(value:any): boolean 
```
传入的值是否为`null`


**参数**  
1. `value`(any): 需要判断是否为`null`的值 

**返回**  
`boolean:` 值为`null`返回`true`,否则返回`false`

**例子**
```js
medash.isNull(null);//true
medash.isNull(0);//false
medash.isNull({});//false
medash.isNull([]);//false
```