import medash from "../../main"
console.log(medash.stringfyQuery({ name: 'url', age: 20, sex: undefined, ff: null }));
console.log(medash.stringfyQuery({}));
console.log(medash.stringfyQuery({ isShow: true, names: ['li', 'hai', ''], age: [[1, 2], 0, 1, 2, false] }));
console.log(medash.stringfyQuery({ name: ['li', 'hai', '', 0, { name: 'lihai' }, [1, 2]], age: 20 }));
console.log(medash.stringfyQuery({ name: 'lihai', age: '20', other: [1, 2, '', { name: 'lihai' }, [1]] }));

