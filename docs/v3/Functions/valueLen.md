```ts
medash.valueLen(value:string):number
```
统计字数,包括emoji表情

**参数**  
1. `value`(string): 字符串

**返回**  
`number`: 字数  

     
**例子**  
<me-embed>const {valueLen} = require("medash");
console.log(valueLen('😃我12'));//4
console.log(valueLen(',.)😅5$  %😇([]'))//13</me-embed>
