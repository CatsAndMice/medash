```js
medash.customKey(args: { [key: string]: any }[], option: Option | Option[], isClone: boolean = false): any[]
```
自定义修改数组元素的`key`,并返回一个新的数组

**参数**    
```js
type Option = {
    key: string;//需要更改的Key
    customKey: string;//更改成的Key
    skip?: skipTypes;//跳转的值
    isClone?: boolean;//是否深克隆,优先级高
}
```

1. `args`({ [key: string]: any }[]): 需要进行自定义数组
2. `option`(Option | Option[]): 自定义修改Key值配置 
3. `isClone`(boolean):是否深克隆
  
**返回**        
`any[]`:返回一个自定义key的数组 

**例子**  

```js
let origin = [{ name: "a", age: 1, params: { name: 'params1' } }];
customKey(origin, { key: 'name', customKey: 'sex' })//[ { sex: 'a' } ]
customKey(origin, { key: 'params', customKey: 'sex' })
//=>[ { sex: { name: 'params1' } } ]
customKey(origin, [{ key: "name", customKey: "key" }, { key: "params", customKey: "value" }])
//=>[ { key: 'a', value: { name: 'params1' } } ]

//跳过值为'a'
customKey(origin, [{ key: "name", customKey: "key", skip: 'a' }, { key: "params", customKey: "value" }])
//=>[ { value: { name: 'params1' } } ]
```
