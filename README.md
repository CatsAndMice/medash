# [@lihai-js/tool](http://jshai.gitee.io/tool)

![npm](https://img.shields.io/npm/v/@lihai-js/tool)
![npm](https://img.shields.io/npm/dt/@lihai-js/tool)

一个应对企业工作常用方法，进行代码片段汇总编写的JavaScipt工具库，旨在减少重复Coding。



## Install

```shell
npm install @lihai-js/tool
```



## Usage

```js
const { ExpandObject } = require('../../main');
let origin = { name: '克隆', childrens: { name: "子类" } }
let cloneTarget = ExpandObject.getClone(origin)
```
导出对应的模块调用

更多方法详情，请查阅 http://jshai.gitee.io/tool



## License

[MIT](http://opensource.org/licenses/MIT)


