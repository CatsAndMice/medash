## 🦄@lihai-js/tool
> 工作中总是要写重复的一些工具方法，浪费时间又没有意义。即想将常用方法函数封装成多个模块，由此`@lihai-js/tool`出现了。

### 🧙安装

```npm
npm i @lihai-js/tool
```

### 💪使用

> nodeJs可以直接引用，**浏览器环境**借助`webpack`ES6module使用

#### 🏹日历模块

`getStringCalender(dateTime,format)`可传入两个参数

​		`dateTime`:时间

​		`format`:时间转化成字符串日历需要的格式，默认`'YY-MM-DD hh:mm:ss'`

```js
const {Calendar} =  require('@lihai-js/tool');
Calendar.getStringCalender(Date.now());//2021.07.24 20:19:14
Calendar.getStringCalender(Date.now(), 'YY年MM月DD日');//2021年07月24日
Calendar.getStringCalender(Date.now(), 'YY年MM月DD日 hh:mm');//2021年07月24日 20:28
Calendar.getStringCalender(Date.now(), 'YY年MM月DD日 hh:mm:ss');//2021年07月24日 20:29:41
Calendar.getStringCalender(Date.now(), 'YY-MM-DD hh:mm:ss');//2021-07-24 20:30:40
Calendar.getStringCalender(Date.now(), 'hh:mm:ss');//20:43:57
```

#### 🏹数字模块

`getRangeNumber(min,max)`随机获取一个`min`与`max`之间的一个整数

​		`min`:最小值 

​		`max`:最大值 

`getUseTwoNumberToString(num)`:`num`小`10`,返回一个字符串

`getThousandsChar(num,char)`:获取`num`的千位符

​		`num`:数字

​		`char`:千位符拼接的符号,默认`,`

```js
const {MathTool} =  require('@lihai-js/tool');
MathTool.getRangeNumber(1,7);//3
MathTool.getUseTwoNumberToString(-2);//'02'
MathTool.getUseTwoNumberToString(2);//'2'
```

```js
MathTool.getThousandsChar(1000.04);//1,000.04
MathTool.getThousandsChar(1000.04,"-");//1-000.04
```

#### 🏹`SessionStorage,LocalStorage`模块

> 针对浏览器中`sessionStorage`，`localStorage`进行封装，所以适用于**浏览器环境**。`nodeJs`环境调用不会报错仅会输出警告方案。

这里用node环境演示一下方法

方法与原生`sessionStorage`,`localStorage`一致，用法也一致。但对传入的`key`,`value`进行校验，value会被`JSON.stringify`转成`JSON`格式

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

​	`dataSource` ：表单值

​	`config`:校验表单值配置，类型为`Array(数组值为对象类型)`或`Object`

​	对象中**必须含有`description`和`errorFn`字段**

​	`description`:调用哪个方法来校验表单值

​	`description`字段可选值有：

​			`isValueNoEmpty`:值不为空

​			`islengthNoZero`:数组长度为零

​			`isValueNoUndefined`:值不为`undefined`

​		    `isQualifiedTel`:值符合电话格式  `/^1[3568][\d]{9}$/`

​			`isEqualsValue`：值等于某个指定的值 

​     `errorFn`:表单校验不正确执行的函数 

`start()`按顺序执行添加至缓存区的表单校验方法,并且清空缓存区的数据。返回一个`Boolean`值 

```js
const { StrategyFrom } = require('@lihai-js/tool');
let dataSource = '';

//校验表单值不为空
StrategyFrom.addCacheTest(dataSource, {description: 'isValueNoEmpty', errorFn: () => {console.log('值不能为空');}});
console.log(StrategyFrom.start());//'值不能为空'  false
```

```js
//校验表单值为undefined并且不能为空
StrategyFrom.addCacheTest(undefined, [
    {description:'isValueNoUndefined',errorFn()=>console.ware('值不能为undefined')}
    {description: 'isValueNoEmpty', errorFn: () => {console.log('值不能为空');}},
]);
console.log(StrategyFrom.start());//值不能为undefined    true
```

```js
StrategyFrom.addCacheTest('13453232335', { description: 'isQualifiedTel', errorFn: () => { console.log('请确定电话号码是否正确'); } });
console.log(StrategyFrom.start());//true
```

```js
//校验表单值是否等于某个指定值，指定值在description字段值后面用`:`拼接
StrategyFrom.addCacheTest('13453232335', { description: 'isEqualsValue:23', errorFn: () => { console.log('值不相等'); } });
console.log(StrategyFrom.start());//值不相等   false

StrategyFrom.addCacheTest('23', { description: 'isEqualsValue:23', errorFn: () => { console.log('值不相等'); } });
console.log(StrategyFrom.start());//true
```

```js
//校验数组是否含有值
StrategyFrom.addCacheTest([], { description: 'islengthNoZero', errorFn: () => { console.log('数组为空'); } });
console.log(StrategyFrom.start());//数组为空   false


StrategyFrom.addCacheTest(['我有值'], { description: 'islengthNoZero', errorFn: () => { console.log('数组为空'); } });
console.log(StrategyFrom.start());//false
```

#### 🏹节流,防抖模块

```js
const {DebounceAndThrottle} = require('@lihai-js/tool');
```

##### 防抖

`debounce(fn,wait,immediate)`：防抖函数，返回一个函数。n秒只执行一次，n秒内多次触发重新定时

​		`fn`:回调函数

​		`wait`：等待时间, 默认`1000`

​		`immediate`:是否立即执行,默认为`false`

`cancelDebounce()`:取消防抖即将执行的函数

##### 节流

`throttle(fn,wait)`:节流函数，返回一个函数 。n秒内只执行一次，n秒内多次触发无效，保证n秒只执行一次

​		参数与`debounce`函数一致，但没有`immediate`

`cancelThrottle()`:取消节流即将执行的函数

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
