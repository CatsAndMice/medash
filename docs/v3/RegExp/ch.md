```ts
medash.ch(value: string):{
    regExp: RegExp;
    isCh: boolean;
}
```
是否含有中文


**参数**  
1. `value`(string): 字符串
  
**返回**  
返回`{regExp: RegExp;isCh: boolean;}`对象。
其中`regExp`表示匹配中文的正则;`isCh`表示是否含有中文。

  
**例子**  

<me-embed>const {ch} = require("medash");</me-embed>