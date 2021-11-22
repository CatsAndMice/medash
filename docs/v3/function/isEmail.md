```js
medash.isEmail(value: string): boolean 
```
判断邮箱是否符合邮箱规则  

邮箱规则:'/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/' 

**参数**  
1. `value`(string): 邮箱

**返回**  
`boolean:` 符合邮箱规则返回`true`,否则返回`false`

**例子**
```js
medash.isEmail('2322873900@qq.com');//true
medash.isEmail('lihai_js@16');//false
medash.isEmail('@com');//false
medash.isEmail('lihai_js@163.com');//true
```