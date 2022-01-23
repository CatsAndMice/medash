import isObject from "./isObject";
interface ChainInterFace {
    fn: any;
    nextChain: Chain | null;
    next: (param?: Function) => Chain;
    passRequest: (param?: any) => void;
}

class Chain implements ChainInterFace {
    fn: any;
    nextChain: Chain | null;
    constructor(fn) {
        this.fn = fn;
        this.nextChain = null;
    }

    next(callback): ChainInterFace {
        this.nextChain = createChain(callback);
        return this.nextChain;
    }

    passRequest(...params) {
        if (isObject(this.nextChain)) {
            //
            this.fn.apply(this, [...params, (this.nextChain as Chain).passRequest.bind(this.nextChain, ...params)]);
            return;
        }
        this.fn.apply(this, [...params, () => { }]);
    }
}


function createChain(callback) {
    return new Chain(callback);
}

export default createChain;