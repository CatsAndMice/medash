```ts
medash.isSafePaddWord(paddWord:string):boolean;
```
校验密码是否满足安全等级

安全等级:
 * 长度至少达到六位数
 * 至少包含大小写字母各两位
 * 至少包含一位特殊字符`!@#$%^&*?`

**参数**  
1. `paddWord`(string ): 密码

**返回**  
`boolean:` 密码满足安全要求返回`true`,否则返回`false`

**例子**
<me-embed>const {isSafePaddWord} = require("medash");
console.log(isSafePaddWord('11w111'))//false
console.log(isSafePaddWord('2324wW'))//false
console.log(isSafePaddWord('2324w'))//false
console.log(isSafePaddWord('W2wwW$'))//true</me-embed>