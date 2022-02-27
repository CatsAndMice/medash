```ts
medash.stringfyQuery(params: { [key: string]: any } = {}):string 
```  
将传递的对象拼接成一个链接参数形式

**参数**  
1. `params`( Object ): 一个对象


**返回**  
`string:`将传递的对象值进行拼接并返回 

**例子**
```js
medash.stringfyQuery({name:'url',age:20});//name=url&age=20
medash.stringfyQuery({});//''
medash.stringfyQuery({name:['li','hai','',0,{name:'lihai'},[1,2]],age:20});//name=li&name=hai&age=20
```