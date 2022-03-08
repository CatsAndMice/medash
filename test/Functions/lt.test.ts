import { lt } from "../../main";
it('less then', () => {
    expect(lt(1, 2)).toBeTruthy();
    expect(lt(2, 2)).toBeFalsy();
    expect(lt(-1, 2)).toBeTruthy();
})