import { gt } from "../../main";
it('great then',()=>{
    expect(gt(1,2)).toBeFalsy();
    expect(gt(2,2)).toBeFalsy();
    expect(gt(3,1)).toBeTruthy();
    expect(gt(0,-1)).toBeTruthy();
    expect(gt(0,-0.999999)).toBeTruthy()
})