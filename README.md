## tool-hai
> 工作中总是要写重复的一些工具方法，浪费时间又没有意义。即想将常用方法函数封装成多个模块，由此`tool-hai`出现了。

### 安装

```npm
npm i tool-hai
```

### 使用

> nodeJs可以直接引用，**浏览器环境**借助`webpack`ES6module使用

#### 日历类

`getStringCalender(dateTime,format)`可传入两个参数

`dateTime`:时间

`format`:时间转化成字符串日历需要的格式，默认`'YY-MM-DD hh:mm:ss'`

```js
const {Calendar} =  require('tool-hai');
Calendar.getStringCalender(Date.now());//2021.07.24 20:19:14
Calendar.getStringCalender(Date.now(), 'YY年MM月DD日');//2021年07月24日
Calendar.getStringCalender(Date.now(), 'YY年MM月DD日 hh:mm');//2021年07月24日 20:28
Calendar.getStringCalender(Date.now(), 'YY年MM月DD日 hh:mm:ss');//2021年07月24日 20:29:41
Calendar.getStringCalender(Date.now(), 'YY-MM-DD hh:mm:ss');//2021-07-24 20:30:40
Calendar.getStringCalender(Date.now(), 'hh:mm:ss');//20:43:57
```

#### 数字类

`getRangeNumber(min,max)`随机获取一个`min`与`max`之间的一个整数

`min`:最小值 

max:最大值 

`getUseTwoNumberToString(num)`:`num`小`10`,返回一个字符串

```js
const {MathTool} =  require('tool-hai');
MathTool.getRangeNumber(1,7);//3
MathTool.getUseTwoNumberToString(-2);//'02'
MathTool.getUseTwoNumberToString(2);//'2'
```

#### `SessionStorage,LocalStorage`类

> 针对浏览器中`sessionStorage`，`localStorage`进行封装，所以适用于**浏览器环境**。`nodeJs`环境调用不会报错仅会输出警告方案。

这里用node环境演示一下方法

方法与原生`sessionStorage`,`localStorage`一致，用法也一致。但对传入的`key`,`value`进行校验，value会被`JSON.stringify`转成`JSON`格式

```js
const {MyStorage } = require('tool-hai'),
    { LocalStorage, SessionStorage } = MyStorage;
LocalStorage.setItem('11',{name:"LocalStorage",value:23});
LocalStorage.getItem('11');
LocalStorage.removeItem('11');
LocalStorage.clear();
```

