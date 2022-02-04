```ts
medash.isBrowser(): boolean 
```
判断当前环境是否为浏览器  

**返回**  
`boolean:` 判断当前环境是否为浏览器, 浏览器环境返回`true`,否则返回`false`

**例子**

<me-embed>const {isBrowser} = require("medash");
//运行node环境中
console.log(isBrowser());//false</me-embed>