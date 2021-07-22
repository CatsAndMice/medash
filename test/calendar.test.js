const Calendar =require('../src/calendar/Calendar');
test('获取今天的日历',()=>{
    expect(Calendar.getStringCalender('','YY-MM-DD')).toBe('2021-07-22');
})