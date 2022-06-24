import { eq } from "../../main";

describe('equals then', () => {
    it('NaN',()=>{
        expect(eq(NaN, NaN)).toBeTruthy();
    })

    it('base', () => {
        expect(eq(0, 0.0000001)).toBeFalsy();
        expect(eq(-1, 0)).toBeFalsy();
        expect(eq(true, 1)).toBeFalsy();
        expect(eq(-1, -1)).toBeTruthy();
    })

    it('object', () => {
        let origin: any = {};
        let target: any = {}
        expect(eq(origin, target)).toBeTruthy();
        target.name = 'target';
        expect(eq(origin, target)).toBeFalsy();
    })

    it('Date', () => {
        let d1 = new Date();
        let d2 = new Date();
        expect(eq(d1, d2)).toBeTruthy();
        d2.setHours(d1.getHours() + 1);
        expect(eq(d1, d2)).toBeFalsy()
    })

    it('RegExp', () => {
        let reg1 = /^\d$/g;
        let reg2 = new RegExp('^\\d$', 'g');
        let reg3 = new RegExp('\\d', 'g');
        expect(eq(reg1, reg2)).toBeTruthy();
        expect(eq(reg2, reg3)).toBeFalsy();
    })
})
