## 🦄@lihai-js/tool
> 工作中总是要写重复的一些工具方法，浪费时间又没有意义。即想将常用方法函数封装成多个模块，所以就有了`@lihai-js/tool`

### 🧙安装

```npm
npm i @lihai-js/tool
```

### 💪使用

> nodeJs可以直接引用，**浏览器环境**借助`webpack`ES6module使用

#### 🏹日历模块

`getStringCalender(dateTime,format)`可传入两个参数

|    参数    |   类型   |                             描述                             |
| :--------: | :------: | :----------------------------------------------------------: |
| `dateTime` | `Number` |             时间戳，传入为空则默认取当天的时间戳             |
|  `format`  | `String` | 时间转化成字符串日历需要的格式，默认`'YY-MM-DD hh:mm:ss'`，可选值：`YY-MM-DD,hh:mm:ss,YY-MM-DD hh:mm` |

举个🌰

```js
const {Calendar} =  require('@lihai-js/tool');
Calendar.getStringCalender(Date.now());//2021.07.24 20:19:14
Calendar.getStringCalender(Date.now(), 'YY年MM月DD日');//2021年07月24日
Calendar.getStringCalender(Date.now(), 'YY年MM月DD日 hh:mm');//2021年07月24日 20:28
Calendar.getStringCalender(Date.now(), 'YY年MM月DD日 hh:mm:ss');//2021年07月24日 20:29:41
Calendar.getStringCalender(Date.now(), 'YY-MM-DD hh:mm:ss');//2021-07-24 20:30:40
Calendar.getStringCalender(Date.now(), 'hh:mm:ss');//20:43:57
```



`getTime(dateTime):`获取当前日历的时间戳

|    参数    |   类型   |                             描述                             |
| :--------: | :------: | :----------------------------------------------------------: |
| `dateTime` | `String` | 日历格式可选:`2021`,`2012-12`,`2021年1月21日`，`2012-2-3 12:34` ,`2012-3-4 12时34分23秒`等 |

举个🌰

```js
const { Calendar } = require('@lihai-js/tool');
const time = new Date(Calendar.getTime('2021-2-5 23.0.50'));//获取2021-2-5 23.0.50,然后再转化成Date对象
console.log(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());//2021, 1, 5, 23, 0, 50,
```

```js
console.log(Calendar.getTime('2023年12月23日 9:34'));
console.log(Calendar.getTime('2023年12月23日 9时34分45秒'));
console.log(Calendar.getTime('2023年1'));
console.log(Calendar.getTime('2023年12-20'));
console.log(Calendar.getTime('2023'));
//...
```





#### 🏹数字模块

`getRangeNumber(min,max)`随机获取一个`min`与`max`之间的一个整数

| 参数  |   类型   |  描述  |
| :---: | :------: | :----: |
| `min` | `Number` | 最小值 |
| `max` | `Number` | 最大值 |

举个🌰

```js
const {MathTool} =  require('@lihai-js/tool');
MathTool.getRangeNumber(1,7);//3
```



`getUseTwoNumberToString(num)`:`num`小`10`,返回一个字符串

| 参数  |   类型   |     描述     |
| :---: | :------: | :----------: |
| `num` | `Number` | 一个任意数字 |

举个🌰

```js
const {MathTool} =  require('@lihai-js/tool');
MathTool.getUseTwoNumberToString(-2);//'02'
MathTool.getUseTwoNumberToString(2);//'2'
```



`getThousandsChar(num,char)`:获取`num`的千位符

|  参数  |   类型   |      描述       |
| :----: | :------: | :-------------: |
| `num`  | `Number` |    任意数字     |
| `char` | `String` | 千位符，默认`,` |

举个🌰

```js
const {MathTool} =  require('@lihai-js/tool');
MathTool.getThousandsChar(1000.04);//1,000.04
MathTool.getThousandsChar(1000.04,"-");//1-000.04
```





#### 🏹`SessionStorage,LocalStorage`模块

> 针对浏览器中`sessionStorage`，`localStorage`进行封装，所以适用于**浏览器环境**。`nodeJs`环境调用不会报错仅会输出警告方案。

这里用node环境演示一下方法

方法与原生`sessionStorage`,`localStorage`一致，用法也一致。但对传入的`key`,`value`进行校验，value会被`JSON.stringify`转成`JSON`格式

举个🌰

```js
const {MyStorage } = require('@lihai-js/tool'),
    { LocalStorage, SessionStorage } = MyStorage;
LocalStorage.setItem('11',{name:"LocalStorage",value:23});
LocalStorage.getItem('11');
LocalStorage.removeItem('11');
LocalStorage.clear();
```



#### 🏹表单校验模块

`addCacheTest(dataSource,config)`将表单校验方法添加至缓存区

|     参数     |         类型         |                             描述                             |
| :----------: | :------------------: | :----------------------------------------------------------: |
| `dataSource` |        `ang`         |                            表单值                            |
|   `config`   | `Object`或`[Object]` | 校验表单值配置方法,对象中**必须含有`description`**字段，`errorFn(v1.2.6) `调整为可选字段 |



|   对象字段    |                         描述                         |
| :-----------: | :--------------------------------------------------: |
| `description` |               调用哪个方法来校验表单值               |
|   `errorFn`   |             表单校验不失败执行的回调函数             |
|    `value`    | `v1.2.6新增`，取代`description`字段中使用`:`进行传值 |

`description`字段可选值有：

|      可选方法名      |                             描述                             |
| :------------------: | :----------------------------------------------------------: |
|   `isValueNoEmpty`   |                      校验表单值是否为空                      |
|   `islengthNoZero`   |                  校验表单值数组长度是否为零                  |
| `isValueNoUndefined` |                   表单值是否为`undefined`                    |
|   `isQualifiedTel`   |                表单值是否符合电话号码常用格式                |
|   `isEqualsValue`    |                   表单值是否与传入的值相等                   |
|  `isQualifiedEmail`  |    表单值是否符合电子邮件格式 <small>`v1.2.3新增`</small>    |
|  `isPaddWordMinLen`  | 校验密码长度是否符合最小长度的要求<small>`v1.2.5新增`</small> |
|  `isLessThenValue`   |            校验表单值是否小于指定值 `v1.2.6新增`             |
| `isGreaterThanValue` |            校验表单值是否大于指定值 `v1.2.6新增`             |



`start()`按顺序执行添加至缓存区的表单校验方法,并且清空缓存区的数据。返回一个`Boolean`值 

`校验表单值不为空` ,举个🌰

```js
const { StrategyFrom } = require('@lihai-js/tool');
let dataSource = '';
StrategyFrom.addCacheTest(dataSource, {description: 'isValueNoEmpty', errorFn: () => {console.log('值不能为空');}});
console.log(StrategyFrom.start());//'值不能为空'  false
```



`多个表单校验规则`,举个🌰

```js
//校验表单值为undefined并且不能为空
StrategyFrom.addCacheTest(undefined, [
    {description:'isValueNoUndefined',errorFn()=>console.ware('值不能为undefined')}
    {description: 'isValueNoEmpty', errorFn: () => {console.log('值不能为空');}},
]);
console.log(StrategyFrom.start());//值不能为undefined    true
```



举个🌰,`校验电话号码格式是否正确`

```js
StrategyFrom.addCacheTest('13453232335', { description: 'isQualifiedTel', errorFn: () => { console.log('请确定电话号码是否正确'); } });
console.log(StrategyFrom.start());//true
```



`校验表单值是否等于某个指定值，指定值在description字段值后面用`:`拼接`

```js
StrategyFrom.addCacheTest('13453232335', { description: 'isEqualsValue:23', errorFn: () => { console.log('值不相等'); } });
console.log(StrategyFrom.start());//值不相等   false

StrategyFrom.addCacheTest('23', { description: 'isEqualsValue:23', errorFn: () => { console.log('值不相等'); } });
console.log(StrategyFrom.start());//true
```



`1.2.6版本`，新增`value`字段取代在description字段值后面用`:`拼接，当然兼容`:`拼接传递 ，但使用`value`字段优先级高于`:` ,举个🌰

```js
StrategyFrom.addCacheTest('13453232335', { description: 'isEqualsValue',value:'23' errorFn: () => { console.log('值不相等'); } });
console.log(StrategyFrom.start());//值不相等   false
```

```js
StrategyFrom.addCacheTest('23', { description: 'isEqualsValue:234' value:'23', errorFn: () => { console.log('值不相等'); } });
console.log(StrategyFrom.start());//true
```



`校验数组是否含有值`

```js
StrategyFrom.addCacheTest([], { description: 'islengthNoZero', errorFn: () => { console.log('数组为空'); } });
console.log(StrategyFrom.start());//数组为空   false
StrategyFrom.addCacheTest(['我有值'], { description: 'islengthNoZero', errorFn: () => { console.log('数组为空'); } });
console.log(StrategyFrom.start());//true
```



`校验邮箱 `

```js
StrategyFrom.addCacheTest('2334', { description: 'isQualifiedEmail', errorFn: () => { console.log('邮箱格式错误!'); } });
console.log(StrategyFrom.start());//false  输出“邮箱格式错误!”
```



`校验密码长度`

```js
StrategyFrom.addCacheTest(234324, { description: 'isPaddWordMinLen:6', errorFn: () => { console.log('密码长度要求最小长度为6!'); } });
console.log(StrategyFrom.start());//true
```

或

```js
StrategyFrom.addCacheTest(234324, { description: 'isPaddWordMinLen',value:6  errorFn: () => { console.log('密码长度要求最小长度为6!'); } });
console.log(StrategyFrom.start());//true
```



`校验表单值是否小于指定值`,看🌰

```js
StrategyFrom.addCacheTest(5, { description: 'isLessThenValue',value:6});
console.log(StrategyFrom.start());//true
```



`校验表单值是否大于指定值`

```js
StrategyFrom.addCacheTest(5, { description: 'isGreaterThanValue',value:6});
console.log(StrategyFrom.start());//false
```





#### 🏹节流,防抖模块

```js
const {DebounceAndThrottle} = require('@lihai-js/tool');
```

##### 防抖

`debounce(fn,wait,immediate)`：防抖函数，返回一个函数。n秒只执行一次，n秒内多次触发重新定时

|    参数     |    类型    |            描述            |
| :---------: | :--------: | :------------------------: |
|    `fn`     | `Function` |          回调函数          |
|   `wait`    |  `Number`  |   等待时间,默认`1000ms`    |
| `immediate` | `Boolean`  | 是否立即执行,默认为`false` |

`cancelDebounce()`:取消防抖即将执行的函数

举个🌰

```js
let debounce = DebounceAndThrottle.debounce(()=>{
    console.log(1);
})
debounce()//1000ms后 输出1

let debounce1 = DebounceAndThrottle.debounce(()=>{
    console.log(1);
},2000,true);//立即执行  输出1

debounce1();//2000ms后 输出1
```



##### 节流

`throttle(fn,wait)`:节流函数，返回一个函数 。n秒内只执行一次，n秒内多次触发无效，保证n秒只执行一次

​		参数与`debounce`函数一致，但没有`immediate`

|  参数  |    类型    |         描述          |
| :----: | :--------: | :-------------------: |
|  `fn`  | `Function` |       回调函数        |
| `wait` |  `Number`  | 等待时间,默认`1000ms` |

`cancelThrottle()`:取消节流即将执行的函数

举个🌰

```js
let throttle = DebounceAndThrottle.throttle(()=>{
    console.log(1);
})
throttle()//1000ms后 输出1

let throttle1 = DebounceAndThrottle.throttle(()=>{
    console.log(1);
})
throttle1();
throttle1();//throttle1两次调用 只会执行回调函数一次  输出 1
```



### 👋最后

这就是`@lihai-js/tool`目前封装的方法，比较少。后期我会一点一点的完善新增更多常用的方法🙈，欢迎提<a href="https://github.com/lihai-boop/js-tool/issues">issues</a>,当然也欢迎大家一起完善增强`@lihai-js/tool`🥺

