## 全屏/退出全屏  
`isFullScreen`:判断是否全屏
```js
import {fullScreen} from "medash";
fullScreen.isFullScreen() 
```  

`requestFullscreen`:开启全屏  
```js
import {fullScreen} from "medash";
fullScreen.requestFullscreen(dom);
```  

**参数**  
1. `dom`(dom): dom元素,不传则默认`document.documentElement`

`exitFullscreen`:退出全屏
```js
import {fullScreen} from "medash";
fullScreen.exitFullscreen();
```


`trigger`:切换全屏/退出全屏。当页面处于全屏时,则退出全屏,反之亦然。 
```js
import {fullScreen} from "medash";
fullScreen.trigger();
```  
 

`addEventListener`: 监听页面切换全屏/退出全屏事件,并执行相对应的事件  
 ```js
import {fullScreen} from "medash";
fullScreen.addEventListener(success,fail);
```


**参数**  
1. `success`(()=>void): 触发全屏时，执行的函数事件  
2. `fail`(()=>void): 触发退出全屏时，执行的函数事件  


**例子**  
<iframe src="https://code.juejin.cn/pen/7103024048703012878" height="300"></iframe>

