```js
medash.getYmdHms(ms: Date | number = Date.now());
```
获取`year, month, date, day, hours, minutes, seconds`值

**参数**  
1. `ms`(Date | number): 时间戳，默认当前时间戳
  
**返回**        
`Object`:返回一个包含`year, month, date, day, hours, minutes, seconds`字段的对象

**例子**  

```js
let { year, month, date, day, hours, minutes, seconds } = medash.getYmdHms();
console.log(year, month, date, day, hours, minutes, seconds);
```
