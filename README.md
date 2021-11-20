# medash

![npm](https://img.shields.io/npm/v/medash)
![npm](https://img.shields.io/npm/dt/medash)

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

[查看文档](https://catsandmice.github.io/medash/#/) 


## License

[MIT](http://opensource.org/licenses/MIT) 


## Contact me 

<img alt="公众号搜索隔壁姥爷" src="https://p.pstatp.com/origin/pgc-image/45fd0fc3498547faaea870528de101e6" width="500px">

