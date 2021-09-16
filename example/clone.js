const { Clone } = require('../main');
let origin = {
    name: { name: 2 },
    wife: null,
    reg: /^\d$/g,
    date: new Date()
}
let deelCloneObj = Clone.getDeelClone(origin);
console.log(deelCloneObj.date instanceof Date);

