```ts
medash.specialChar(value: string, reg: RegExp = regChar):result
```
判断是否包含`~!@#$%^&*()_-+=<>?:"{}|,.\/;'[]·~！@#￥%……&*（）——-+={}|《》？：“”【】、；‘’，。、特殊字符

**参数**  
1. `value`(string): 字符串
2. `reg`:(RegExp): 正则,默认为/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/
  
**返回**  
`result`:返回一个包含`isSpecialChar,value,regExp`属性的对象
```js
type result = {
    isSpecialChar: boolean,//是否包含特殊字符
    value: string//去除所有特殊字符后的值
    regExp: RegExp//正则
}
```
**例子**  
<me-embed>const {specialChar} = require("medash");
console.log(specialChar('1'));//{isSpecialChar: false,value: "1",...}
console.log(specialChar('&'));//{isSpecialChar: true,value: "",...}
console.log(specialChar('，'));//{isSpecialChar: true,value: "",...}</me-embed>

