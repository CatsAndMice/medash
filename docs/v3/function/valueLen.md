```js
medash.valueLen(value:string):number
```
统计字数,包括emoji表情

**参数**  
1. `value`(string): 字符串

**返回**  
`number`: 字数  

     
**例子**  

```js
medash.valueLen('😃我12');//4
medash.valueLen(',.)😅5$  %😇([]')//13
```
