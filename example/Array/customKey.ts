import { customKey } from "../../main";
let origin = [{ name: "a", age: 1, params: { name: 'params1' } }]
console.log(customKey(origin, { key: 'name', customKey: 'sex' }));
console.log(customKey(origin, { key: 'params', customKey: 'sex' }));
console.log(customKey(origin, [{ key: "name", customKey: "key" }, { key: "params", customKey: "value" }]));
console.log(customKey(origin, [{ key: "name", customKey: "key", skip: 'a' }, { key: "params", customKey: "value" }]));
