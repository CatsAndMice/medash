import { chain } from "../../main";

describe("chain test", () => {
    it("chain", () => {
        chain((param, next) => {
            console.log(param, 'f1');
            next();
        }).next((param, next) => {
            console.log(param, 'f2');
        })

    })
})
