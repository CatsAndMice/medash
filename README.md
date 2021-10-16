# [@lihai-js/tool](http://jshai.gitee.io/tool)

![npm](https://img.shields.io/npm/v/@lihai-js/tool)
![npm](https://img.shields.io/npm/dt/@lihai-js/tool)

一个应对企业工作常用方法，进行代码片段汇总编写的JavaScipt工具库，旨在减少重复Coding。



## Install

```shell
npm install @lihai-js/tool
//yarn add  @lihai-js/tool
```


## Usage
深克隆
```js
const { ExpandObject } = require('@lihai-js/tool');
let origin = { name: '克隆', childrens: { name: "子类" } }
let cloneTarget = ExpandObject.getClone(origin)
```
订阅事件
```js
const { MyEvent } = require('@lihai-js/tool');
MyEvent.on('click', () => {
    console.log('订阅一个click事件');
});

MyEvent.trigger('click');
```

导出对应的模块使用
更多方法详情，请根据网络情况选择https://catsandmice.github.io/tool/#/ 或 http://jshai.gitee.io/tool 进行查阅


## License

[MIT](http://opensource.org/licenses/MIT)


## Contact me 

<img alt="公众号搜索隔壁姥爷" src="https://p.pstatp.com/origin/pgc-image/45fd0fc3498547faaea870528de101e6" width="500px">

