const { Clone } = require('../main');
let origin = {
    name: { name: 2 },
    wife: null
}
let cloneObj = Clone.getClone();
let deelCloneObj = Clone.getDeelClone(origin);
origin.name.name = {age:2};
console.log(origin,cloneObj);

// console.log(origin);
// origin.wife = "js";
// console.log(cloneObj);