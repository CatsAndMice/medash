import medash from "../main"
import stringToDate from "../src/Date/stringToDate"
const fn = () => { }
medash.once('one', function () {
    console.log(1)
})
medash.once('one', fn)
medash.once('one', fn)
medash.watchCache()
medash.trigger('one')
medash.watchCache()

console.log(medash.eq(() => {
    console.log(11);
}, () => {
    console.log(11);
}));

console.log(medash.getCalender(Date.now(), 'YY-MM-DD'));

console.log(stringToDate('2012,12,34'),Date.now());

