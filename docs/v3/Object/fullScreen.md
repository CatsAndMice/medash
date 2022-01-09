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

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="full">搜查发电机</div>
    <button id="btn">全屏</button>
    <script type="module">
        import fullScreen from "../../dist/Object/fullScreen.js";
        const btn = document.getElementById('btn');
        btn.onclick = () => {
            fullScreen.addEventListener(() => {
                console.log('成功');
            }, () => {
                console.log('失败');
            })
            fullScreen.isFullScreen() ? fullScreen.exitFullscreen() : fullScreen.requestFullscreen(btn);
        }
    </script>
</body>

</html>
```
