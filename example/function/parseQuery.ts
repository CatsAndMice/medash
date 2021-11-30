import medash from "../../main"
const params = {
    name: 'query',
    age: [1, 23, 45],
    sex: '',
    childrens: [{}, '', 2]
}
const query = medash.stringfyQuery({ name: 'lihai', age: '20', other: [ 2,'8', '', { name: 'lihai' }, [1]] })
const url = 'https://www.npmjs.com/package/@lihai-js/tool?' + medash.stringfyQuery(params);
console.log(medash.parseQuery(url));
console.log(medash.parseQuery('https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2749274'));
console.log(query);
console.log(medash.parseQuery('https://www.npmjs.com/package/@lihai-js/tool?' + query));

