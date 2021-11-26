```js
medash.isEmptyObj (origin: { [key: string]: any }):boolean
```
对象是否为空对象

**参数**  
1. `origin`({ [key: string]: any }): 检验的对象
  
**返回**        
`boolean`:对象为一个空对象返回`true`,否则返回`false`
**例子**  

```js
medash.isEmptyObj({});//true
medash.isEmptyObj({age:20});//false
medash.isEmptyObj(1 as Object);//false
```
