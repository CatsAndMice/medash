```js
medash.getType(value:any):string
```
获取参数的类型

**参数**  
1. `value`(any): 需要获取的类型的值
  
**返回**        
`string`: 返回传入参数的类型, 类型各类请看举例

**例子**  

```js
medash.getType(null) === 'null';//true
medash.getType(undefined) === 'undefined';//true
medash.getType(Symbol(1)) === 'symbol';//true
medash.getType(1) === 'number';//true
medash.getType('1') === 'string';//true
medash.getType(new String('')) === 'String';//true
medash.getType(new Number('')) === 'Number';//true
medash.getType({}) === 'Object';//true
medash.getType([]) === 'Array';//true
medash.getType(/1/g) === 'RegExp';//true
medash.getType(new Date()) === 'Date';//true
```
