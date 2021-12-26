## 订阅发布模块event

### 模块event方法
```js
medash.on(key: string, value: () => void)
```
订阅永久事件,**相同事件只能订阅一次**

**参数**  
`key`(string): 订阅事件名
`value`(() => void):事件函数   

```js
medash.once(key: string, value: () => void)
```
订阅一次性事件,触发发布执行后将会删除对应的事件,**相同事件只能订阅一次**

**参数**  
`key`(string): 订阅事件名
`value`(() => void):事件函数 
  

```js
medash.trigger(key: string)
```
触发订阅的事件  
**参数**  
`key`(string): 订阅事件名  

```js
medash.remove(key: string)
```
删除所有相同`key`的事件

**注意: 订阅事件数有一定的上限,超出上限将订阅失败**

```js
medash.setMaxCache(num: number)
```
设置新的上限数  

**参数**  
`num`(string): 上限数  

```js
medash.getMaxCache()
```
获取上限数  
**参数**  
无  

```js
medash.watchCache()
```
查看所有的订阅的事件  

**参数**  
无  