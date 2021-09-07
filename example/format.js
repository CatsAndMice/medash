const { Format } = require('../main');
console.log(Format.format([{a:1,b:2}],{attrName:'b',formatName:'bb'}));
console.log(Format.format({ a: 1, b: 2 }, [{ attrName: 'a', formatName: 'name' }]));