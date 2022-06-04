```ts
medash.daysOfMonth(date: Date | number = Date.now()): number
```
获取当前月份有多少天

**参数**  
1. `date`(Date|number): 时间 
  
**返回**          
`number`:某个月份的天数        
  
**例子**  

<me-embed>const  { daysOfMonth, getYmdHms, eq }  = require("medash")
const { year, month: curMonth } = getYmdHms()
const createDate = new Date()
const day = 1000 * 60 * 60 * 24
createDate.setDate(1)
createDate.setMonth(curMonth + 1)
const days = new Date(createDate.getTime() - day).getDate()
console.log(eq(daysOfMonth(), days));//true  参数为空时，默认获取当前月份有多少天
console.log(daysOfMonth(new Date(year+"-4-1")));//30
console.log(daysOfMonth(new Date(year+"-7-1")));//31
console.log(daysOfMonth(new Date(year+"-02-01").getTime()))// 每年二月份 28/29
const month = (new Array(12).fill(0)).map((value, index) => index + 1)
month.forEach(value => {
    console.log(daysOfMonth(new Date(year+"-"+value+"-1")), value);//31 1,28 2,31 3,30 4,31 5,30 6,31 7,31 8,30 9,31 10,30 11,31 12
})
</me-embed>