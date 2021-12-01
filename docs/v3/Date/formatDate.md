```js
medash.formatDate(ms: Date | number):string;
```
将时间戳格式化成字符串

**参数**  
1. `ms`( Date | number): 时间戳
  
**返回** 
`string`:返回时间戳详细的时长字符串

  
**例子**  

```js
medash.formatDate(10000));//10 seconds
medash.formatDate(1000));//1 second
medash.formatDate(1000 * 2 + 5);//2 seconds, 5 milliseconds
console.log(formatDate(302544543));//3 days, 12 hours, 2 minutes, 24 seconds, 543 milliseconds
```
