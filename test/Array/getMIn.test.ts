import { getMin } from "../../main";
it('getMin',()=>{
    let arrs = [1,2,0,3,-1];
    expect(getMin(arrs)).toBe(-1)
})