<img src="./docs/medash.png" style="width:100%;">    

![npm](https://img.shields.io/npm/v/medash)
![npm](https://img.shields.io/npm/dt/medash)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/medash)
[![LICENSE MIT](https://img.shields.io/npm/l/medash.svg)](https://www.npmjs.com/package/medash)

 

前端`JavaScipt`业务代码工具库

> 业务常用代码片段汇总，高效率完成Task

业务开发过程中，经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## :building_construction:  安装使用

```shell
npm install medash
//或 yarn add  medash
```

### 完整导入

```js
const medash = require('medash');
medash.eq('medash','medash');//true
```

### 按需导入

> 按需导入只会加载需要代码，减少文件体格

```js
const eq = require('medash/eq');
eq('medash','medash');//true
```

## :package:  API文档

[查看文档](http://jshai.gitee.io/tool) 


## 协议

[MIT](http://opensource.org/licenses/MIT) 


## 联系我

<img alt="微信公众号搜索CatsAndMice" src = 'https://i.bmp.ovh/imgs/2021/10/cd69e46c3bdc6ee3.png' width="500"/>

