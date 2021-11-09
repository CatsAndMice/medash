import medash from "../main"
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


