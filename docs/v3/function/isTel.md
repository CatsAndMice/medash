```ts
medash.isTel(value: string): boolean 
```
判断电话号码是否符合规则  

电话规则:'/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/'  

**参数**  
1. `value`(string | number): 电话号码 

**返回**  
`boolean:` 电话号码是否符合规则,符合规则返回`true`,否则返回`false`

**例子**
<me-embed>const {isTel} = require("medash");
console.log(isTel('12344556'));//false
console.log(isTel(13034833806));//true
console.log(isTel(1304546));//false</me-embed>