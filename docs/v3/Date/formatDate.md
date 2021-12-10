```js
medash.formatDate(ms: Date | number,format:Format):string;
```


将时间戳格式化成字符串

**参数**  
1. `ms`( Date | number): 时间戳
2. `format`(Format): 格式化规则 默认`{day: '天',hour: '小时',minute: '分钟',second: '秒',millisecond: '毫秒', concat: ', '}`
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

`string`:返回时间戳详细的时长字符串

  
**例子**  

```js
medash.formatDate(10000,{second:'秒'}));//10秒
medash.formatDate(1000,{second:'秒'}));//1秒
medash.formatDate(1000 * 2 + 5,{second:'秒',millisecond:'毫秒'});//2秒, 5毫秒
console.log(formatDate(302544543));//3天, 12小时, 2分钟, 24秒, 543毫秒
```
