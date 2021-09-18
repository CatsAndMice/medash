const { ExpandObject } = require('../../main');
let origin = { name: '克隆', childrens: { name: "子类" } }
let cloneTarget = ExpandObject.getClone(origin)
console.log(cloneTarget === origin);
console.log(origin.childrens === cloneTarget.childrens);
origin.childrens.name = "修改㳀克隆源数据"
console.log(cloneTarget.childrens.name);

// 深克隆 
let deelCloneTarget = ExpandObject.getDeelClone(origin);
console.log(deelCloneTarget === origin);
console.log(deelCloneTarget.childrens === origin.childrens);
origin.childrens.name = "修改深克隆源数据"
console.log(cloneTarget.childrens.name);
console.log(deelCloneTarget.childrens.name);
