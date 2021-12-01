```js
medash.diff(origin: Date | number, target: Date | number):string
```
比较两者时间差

**参数**  
1. `origin`(Date | number): 时间戳
2. `target`(Date | number): 另外一个时间戳
  
**返回**        
`string`: 返回一个两者时间差字符串

**例子**  

```js
medash.diff(2000, 1000);//1 second
medash.diff(new Date('2021'), new Date('2020'));//366 days
```
