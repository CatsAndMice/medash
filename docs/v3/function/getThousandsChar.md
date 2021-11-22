```js
medash.getThousandsChar(num: number, char: string = ','): string
```  
数字添加千位符

**参数**  
1. `num(number):`数字
2. `char(string):`分隔符，默认`,`

**返回**  
`string:` 返回一个千位符

**例子**
```js
medash.getThousandsChar(1000000);//1,000,000
medash.getThousandsChar(10000)//10,000
medash.getThousandsChar(1000);//1,000
medash.getThousandsChar(100);//100
medash.getThousandsChar(10000,'-');//10-000
```