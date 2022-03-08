import { isBrowser } from "../../main";
it('isBrowser', () => {
    expect(isBrowser()).toBeFalsy();
})