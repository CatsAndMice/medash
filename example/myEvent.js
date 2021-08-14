const { MyEvent } = require('../main');
MyEvent.on('click', () => {
    console.log('这是click事件');
});
MyEvent.once('li', () => {
    console.log('这是li事件');
});
MyEvent.trigger('click');
MyEvent.trigger('li');
console.log(MyEvent);