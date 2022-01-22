```js
medash.some(origin: { [key: string]: any }, callBack: (key?, value?, self?) => boolean):boolean
```
`some()`方法测试对象中是不是至少有1个值通过了被提供的函数测试。它返回的是一个Boolean类型的值。  
> 注意：如果用一个空对象进行测试，在任何情况下它返回的都是false。

**参数**  
1. `origin`({ [key: string]: any }):需要遍历的对象
2. `callBack`((key?, value?, self?) => boolean):每次遍历执行回调函数
    * `key`:对象属性
    * `value`:对象属性值
    * `self`:被遍历的对象
  
**返回**  
 `boolean`: 被提供的函数返回`true`，则`some`方法结束并返回`true`;遍历完成对象后被提供的函数一直没有返回`true`,则`some`方法返回`false`。  
  
**例子**  
```js
const data = { name: 'some', age: 20, sex: '男' };
medash.some(data, (key, value) => value === 20);//true
medash.some(data, key => key==="key");//false
```
