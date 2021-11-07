import { getMax } from "../../main";
it('getMax',()=>{
    let arrs = [1,2,0,3,-1]
    expect(getMax(arrs)).toBe(3)
})