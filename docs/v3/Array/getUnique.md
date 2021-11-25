```js
medash.getUnique(args: any[]): any[]
```
数组去重

**参数** 
1. `args`(any[]): 需要去重的数组 
  
**返回**        
`any[]`:返回去重后的数组    

**例子**  

```js
medash.getUnique([11, 11, 1, 1, 2, 2]);//[11,1,2]
medash.getUnique([-1, -1, 2]);//[-1,2]
medash.getUnique([{ name: 'name' }, { age: 20 }, 1]));
//=>[ { name: 'name' }, { age: 20 }, 1 ]

medash.getUnique([{ name: 'name' }, { name: 'name' }, 1]);
//=>[ { name: 'name' }, 1 ]
```
