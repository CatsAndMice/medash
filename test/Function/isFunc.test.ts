import { isFunc } from "../../main";
it('isFunc',()=>{
    const fn = ()=>{};
    expect(isFunc(()=>{})).toBeTruthy();
    expect(isFunc(1)).toBeFalsy();
    expect(isFunc('2')).toBeFalsy();
    expect(isFunc(function(){})).toBeTruthy();
    expect(isFunc(fn)).toBeTruthy();
})