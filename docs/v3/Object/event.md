## 订阅发布模块event

### 模块event方法
```ts
medash.on(key: string, value: () => void)
```
订阅永久事件,**相同事件只能订阅一次**

**参数**  
`key`(string): 订阅事件名
`value`(() => void):事件函数   

```ts
medash.once(key: string, value: () => void)
```
订阅一次性事件,触发发布执行后将会删除对应的事件,**相同事件只能订阅一次**

**参数**  
`key`(string): 订阅事件名
`value`(() => void):事件函数 
  

```ts
medash.trigger(key: string,...rest:any[])
```
触发订阅的事件  
**参数**  
`key`(string): 订阅事件名  
`rest`:参数会传递到每一个执行的函数中

```ts
medash.remove(key: string)
```
删除所有相同`key`的事件

**注意: 订阅事件数有一定的上限,超出上限将订阅失败**

```ts
medash.setMaxCache(num: number)
```
设置新的上限数  

**参数**  
`num`(string): 上限数  

```ts
medash.getMaxCache()
```
获取上限数  
**参数**  
无  

```ts
medash.watchCache()
```
查看所有的订阅的事件  

**例子**  
<me-embed>
const {event} = require("medash");
event.on("onEvent",()=>{
    console.log('订阅永久事件');
});
event.once("onceEvent",()=>{
    console.log("订阅一次性事件");
})
//重复订阅相同事件,只能保留上次一次订阅的
event.once("onceEvent",()=>{
    console.log("订阅一次性事件");
})
event.once("onceEvent",()=>{
    console.log("相同onceEvent,多次订阅事件");
})
// 查看所有的订阅事件
event.watchCache();
// 触发事件
event.trigger('onceEvent');
event.trigger('onEvent');

</me-embed>