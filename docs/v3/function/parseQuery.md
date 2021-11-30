```js
medash.parseQuery(url: string): Object 
```  
获取路径链接中的参数

**参数**  
1. `url`( string ): 路径链接

**返回**  
`Object:`获取链接中的参数，储存在对象中并返回

**例子**
```js
medash.parseQuery('https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2749274');
//{ manage_type: 'myprojects', projectId: '2749274' }
medash.parseQuery('https://www.npmjs.com/package/@lihai-js/tool');//{}

const query = medash.stringfyQuery({ name: 'lihai', age: '20', other: [ 2,'8', '', { name: 'lihai' }, [1]] })
medash.parseQuery('https://www.npmjs.com/package/@lihai-js/tool?' + query);
//=>{ name: 'lihai', age: '20', other: [ '2', '8' ] }
```