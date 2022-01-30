```js
medash.getValue(args: any[], callBack: (value?: any, index?: number, self?: Object) => boolean): any
```
遍历数组,当`callBack`函数返回`true`时，遍历立即结束并返回当前值(原生`filter`依然会进行遍历)
当遍历结束时,如果`callBack`一直没有返回`true`时,`getValue`方法执行结束返回`undefined`。

**参数**  
1. `args`(any[]): 任意类型的数组  
2. `callBack`((value?: any, index?: number, self?: Object) => boolean):函数
    * `value`: 数组遍历时的子元素
    * `index`: 索引 
    * `self`: 传入的数组,即`args`
  
**返回**        
 `any`: 数组的某个子元素或`undefined`

**例子**  
<me-embed>
const {getValue} = require("medash");
const value = [{ name: 'lihai', age: 20 }, { name: 'java', age: 21 }];
const callBack = (val) => {
    const { name } = val;
    return name === 'lihai'
}
console.log(getValue(value, callBack));//{ name: 'lihai', age: 20 }
console.log(getValue(value, (val)=>{ //undefined
    return val.age===30
}));
</me-embed>
