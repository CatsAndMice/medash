```js
medash.isSpecialChar(value: string, reg: RegExp = regChar):boolean
```
判断是否包含`~!@#$%^&*()_-+=<>?:"{}|,.\/;'[]·~！@#￥%……&*（）——-+={}|《》？：“”【】、；‘’，。、特殊字符

**参数**  
1. `value`(string): 字符串
2. `reg`:(RegExp): 正则,默认为/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/
  
**返回**  
`boolean`: 包含有特殊字符返回`true`,否则返回`false`;        
  
**例子**  

```js
medash.isSpecialChar('1');//false
medash.isSpecialChar('&');//true
medash.isSpecialChar('，');//true
```
