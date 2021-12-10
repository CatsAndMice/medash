```js
medash.diff(origin: Date | number, target: Date | number,format:Format):string
```
比较两者时间差

**参数**  
1. `origin`(Date | number): 时间戳
2. `target`(Date | number): 另外一个时间戳
3. `format`(Format): 格式化规则 默认`{day: '天',hour: '小时',minute: '分钟',second: '秒',millisecond: '毫秒',concat: ', '}`
```js
type Format = {
    day?: string,
    hour?: string,
    minute?: string,
    second?: string,
    millisecond?: string,
    concat?:string
}
```

**返回**        
`string`: 返回一个两者时间差字符串

**例子**  

```js
medash.diff(2000, 1000,{second:'秒'});//1秒
medash.diff(new Date('2021'), new Date('2020')，{day: '天'});//366天
```
