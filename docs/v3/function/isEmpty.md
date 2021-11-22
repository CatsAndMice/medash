```js
medash.isEmpty(value: any):boolean
```
判断值是否为空  
`0,null,'',undefined`参数值为其中之一,则认为参数值为空值

**参数**  
1. `value`(any): 需要判断的值

**返回**  
`boolean:`值等于`0,null,'',undefined`其中之一返回`true`,否则返回`false`

**例子**
```js
medash.lt(1, 2)//true
medash.lt('1', 2)//true
medash.lt('2',0)//false
medash.lt(2,-2)//false
```