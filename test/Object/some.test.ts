import { some } from "../../main";

describe("some test", () => {
    it("some", () => {
        const data = { name: 'lihai', age: 20, sex: '男' };
        expect(some(data, (key, value) => value === 20)).toBeTruthy();
        expect(some((null as any), () => false)).toBeFalsy();
    })

    it('some array', () => {
        const data = [1, 2, 3];
        expect(some(data as any, () => true)).toBeFalsy()
    })

    it('call', () => {
        const data = { name: 'lihai', age: 20, sex: '男' };
        const mockCallback = jest.fn((key,value) => value === 20);
        some(data, mockCallback);
        expect(mockCallback.mock.calls.length).toBe(2);
    })
})
