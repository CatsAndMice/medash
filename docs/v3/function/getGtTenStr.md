```js
medash.getGtTenStr(num: number): string
```  
数字转换成字符串,返回的字符串至少两位数以上

**参数**  
1. `num`( number ): 数字 

**返回**  
`string:`返回一个至少两位数的字符串

**例子**
```js
medash.getGtTenStr(1);//'01'
medash.getGtTenStr(0);//'00'
medash.getGtTenStr(-1);//'01'
medash.getGtTenStr(-11);//'11'
```