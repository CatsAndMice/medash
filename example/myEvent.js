const { MyEvent } = require('../main')
function getFn() {
    console.log('getfn');
}
MyEvent.once('11', getFn)
MyEvent.once('11', getFn)
console.log(MyEvent);