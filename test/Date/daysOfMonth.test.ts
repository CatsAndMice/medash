import { daysOfMonth, getYmdHms } from "../../main";

describe("daysOfMonth test", () => {
    it("daysOfMonth", () => {
        let  { year, month } = getYmdHms()
        month +=1
        // new Date()时传字符串或多个数字是不同的

        // new Date('2022-2-1')获取值时对应真实的值，当new Date(2022,2,1)创建时，获取值时对应真实的3月份与实际有区别
        const createDate = new Date(`${year}-${month+1}-1`)
        const days = new Date(createDate.getTime() - 1000 * 60 * 60 * 24).getDate()
        expect(daysOfMonth(Date.now())).toBe(days)
    })

    //7月份是31天
    it('July', () => {
        const { year } = getYmdHms()
        const julyMonth = new Date(`${year}-7-1`)
        expect(daysOfMonth(julyMonth)).toBe(31)
    })

    //空值
    it('empty value',()=>{
        let { year, month } = getYmdHms()
        month+=1
        const createDate = new Date(`${year}-${month + 1}-1`)
        const days = new Date(createDate.getTime() - 1000 * 60 * 60 * 24).getDate()
        expect(daysOfMonth(undefined)).toBe(days)
        expect(daysOfMonth(0)).toBe(0)
    })
})
