```js
//导出db对象，然后再调用方法
import {db} from "medash"
db.setLocalDb(key,value)
//...


//或直接调用
medash.setLocalDb(key,value); //对应setItem, 已进行序列化处理
medash.getLocalDb(key); //对应getItem
medash.removeLocalDb();//对应removeItem
medash.clearLocalDb();//对应clear
medash.setSionDb(key,value);
medash.getSionDb(key);
medash.removeSionDb();
medash.clearSionDb();
```
简单封闭浏览器`localStorage,sessionStorage`API,`setLocalDb,getLocalDb,removeLocalDb,clearLocalDb`对应`localStorage`;`setSionDb,getSionDb,removeSionDb,clearSionDb`对应`sessionStorage`。
  
**返回**  
无        
  
**例子**  
无
