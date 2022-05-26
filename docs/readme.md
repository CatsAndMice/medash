## 前端`JavaScipt`业务代码工具库

> 业务常用代码片段汇总，高效率完成Task

业务开发过程中，经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## :building_construction:  安装

### CDN
<!--cdn-links-start-->
```html
<script src="https://cdn.jsdelivr.net/npm/medash@3.2.2/dist/medash.min.js"></script>
```
<!--cdn-links-end-->

### npm

推荐使用 npm 安装[[1\]](https://v3.cn.vuejs.org/guide/installation.html#footnote-1) 

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
const eq = require('medash/lib/eq');
eq('medash','medash');//true
```
 [webpack](https://webpack.js.org/) 或 [Rollup](https://rollupjs.org/) 模块打包器配合使用，可使用ES6模块化导入
```js
import eq from 'medash/lib/eq';
eq('medash','medash');//true
```
> 注意点: 使用某个API时,如果报错请检查`medash`版本，确保为最新的版本


## 联系我

<img alt="微信号" src = 'https://s3.bmp.ovh/imgs/2022/03/b55e71f2dc3e16c3.png' width="150"/>