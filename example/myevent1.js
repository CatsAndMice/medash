const { MyEvent } = require('../main');
MyEvent.setMaxCacheNum(20)
for (let index = 0; index < 20; index++) {
    console.log(index);
    MyEvent.on('num', index);
}