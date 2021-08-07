const MyEvent = require('../src/myEvent/MyEvent');
MyEvent.on('click', () => {
    console.log('点击事件');
})

MyEvent.once('click', () => {
    console.log("只执行一次");
});

MyEvent.once('focus', () => {
    console.log("聚焦");
})

setTimeout(() => {
    MyEvent.trigger('click');
    MyEvent.trigger('focus');
    MyEvent.trigger('click');
    MyEvent.trigger('focus');
    console.log(MyEvent);
}, 3000)
