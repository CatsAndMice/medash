import {isSafePaddWord} from "../../main"
it('isSafePaddWord',()=>{
    expect(isSafePaddWord('11E&')).toBeFalsy();
    expect(isSafePaddWord('12W34Cs,a*')).toBeTruthy();
    expect(isSafePaddWord('1a2scsWWW')).toBeFalsy();
    expect(isSafePaddWord('24****WW')).toBeFalsy();
    expect(isSafePaddWord('24****wwVD&%45')).toBeTruthy();
})