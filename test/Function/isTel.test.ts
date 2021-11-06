import { isTel } from "../../main";
it('isTel', () => {
    let tel1 = 12344556;
    let tel2 = 13034833806;
    let tel3 = 1304546;
    expect(isTel(tel1)).toBeFalsy();
    expect(isTel(tel2)).toBeTruthy();
    expect(isTel(tel3)).toBeFalsy();
})