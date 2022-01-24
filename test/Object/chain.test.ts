import { chain } from "../../main";

describe("chain test", () => {
    it("chain", () => {
        const fn = jest.fn((next) => { next() })
        const c = chain(fn);
        c.next(fn).next(fn);
        c.passRequest();
        expect(fn.mock.calls.length).toBe(3)
    })

    it('next', () => {
        const fn = jest.fn(() => { });
        const c = chain((next) => {
            setTimeout(() => {
                fn();
                expect(fn.mock.calls.length).toBe(1);
                next();
            }, 2000)
        });
        c.next((next) => {
            expect(fn.mock.calls.length).toBe(1)
            next();
        }).next(() => {
            fn();
            expect(fn.mock.calls.length).toBe(2)
        });
        c.passRequest();
    })

    it('async', () => {
        const fn = jest.fn(() => { });
        let num = 0;
        const c = chain((next) => {
            expect(fn.mock.calls.length).toBe(0);
            setTimeout(() => {
                fn();
                num += 2;
                expect(num).toBe(2);
                expect(fn.mock.calls.length).toBe(1);
                next();
            }, 2000)
        });

        c.next((next) => {
            expect(num).toBe(2);
            setTimeout(next, 3000);
            num += 2;
        }).next(() => {
            fn();
            expect(fn.mock.calls.length).toBe(4);
            expect(fn.mock.calls.length).toBe(2);
        })

        c.passRequest();
        expect(fn.mock.calls.length).toBe(0);
    })
})
