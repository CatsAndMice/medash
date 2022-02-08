```ts
medash.getCalender(args: Date | number, format: string = 'YYYY.MM.DD hh:mm:ss')
```


**参数**  
1. `args`(Date | number): 时间戳  
2. `format`(string): 时间戳转化规则,默认`YYYY.MM.DD hh:mm:ss`  

规则可选: 
* `YYYY*MM*DD* hh*mm*ss*`  
* `YYYY*MM*DD*`  
* `hh*mm*ss*`  

其中`*`表示任意字符


**返回**  
`string`:返回格式后的日期        
  
**例子**  

<me-embed>const {getCalender} = require("medash");
console.log(getCalender(Date.now(), 'YYYY.MM.DD'));
console.log(getCalender(Date.now(), 'YYYY.MM.DD hh时mm分ss秒'));
console.log(getCalender(Date.now(), 'hh时mm分ss秒'));</me-embed>