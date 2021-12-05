import { createNamespace } from "../../main";
let [name, bem] = createNamespace('medash');
console.log(name, bem('create'));
console.log(bem(['create', 'bem']));
console.log(bem({create:'create', bem:'bem1'}));


