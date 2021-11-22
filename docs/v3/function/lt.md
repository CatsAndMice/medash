```js
medash.lt(value: number | string, target: number | string): boolean
```

比较大小，前者值是否小于后者

**参数**  
1. `value`( number | string): 要比较的值。
2. `target`( number | string): 另一个要比较的值。

**返回**  
`boolean:`前者值小于后者值返回`true`,否则返回`false` 

**例子**
```js
medash.lt(1, 2)//true
medash.lt('1', 2)//true
medash.lt('2',0)//false
medash.lt(2,-2)//false
```