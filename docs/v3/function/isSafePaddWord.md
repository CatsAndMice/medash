```js
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
```js
medash.isSafePaddWord('11w111')//false
medash.isSafePaddWord('2324wW')//false
medash.isSafePaddWord('2324w')//false
medash.isSafePaddWord('W2wwW$')//true
```