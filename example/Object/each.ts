import { each } from "../../main";
const obj = { name: 'lihai', age: 20 };
const keys: any[] = [];
const values: any[] = [];
each(obj, (key, value) => {
    keys.push(key as string);
    values.push(value as any)
})
each({ name: 'lihai', age: 20 }, (key, value,self) => {
    console.log(key, value,self);
})