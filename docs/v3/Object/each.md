```js
medash.each(origin: { [key: string]: any }, callBack: (key?, value?, self?) => void):void
```
遍历对象

**参数**  
1. `origin`({ [key: string]: any }):需要遍历的对象
2. `callBack`((key?, value?, self?) => void):每次遍历执行回调函数
    * `key`:对象属性
    * `value`:对象属性值
    * `self`:被遍历的对象
  
**返回**  
无       
  
**例子**  

<me-embed>
const medash = require("medash");
const obj = { name: 'lihai', age: 20 };
const keys = [];
const values = [];
medash.each(obj, (key, value) => {
    keys.push(key);
    values.push(value)
})
console.log(keys,values);
</me-embed>
<me-embed>
const medash = require("medash");
medash.each({ name: 'lihai', age: 20 }, (key, value,self) => {
    console.log(key, value,self);
})
</me-embed>