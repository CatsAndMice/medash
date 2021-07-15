const FromTest = require('./FromTest');
const testFn = Symbol('私有方法');
class Strategy {
    FromTest = FromTest;
    cacheTest = [];
    [testFn](fn) {
        fn();
        return false;
    }

    start() {
        if (!this.cacheTest.length) return;
        for (const test of this.cacheTest) {
            let { dataSource, methodName, value, errorFn } = test;
            let isHaveMehtod = methodName in this.FromTest;
            if (isHaveMehtod) {
                if (this.FromTest[methodName](dataSource, value)) {
                    return this[testFn](errorFn);
                }
            } else {
                console.warn(`${methodName}访方法不存在`);
                return false;
            }
        }
        return true;
    }

    addCacheTest(dataSource, { description, errorFn }) {
        let [methodName, value] = description.split(":");
        this.cacheTest.push({ dataSource, methodName, value, errorFn });
    }

}

let strategy = new Strategy();
strategy.addCacheTest([1], {
    description: 'islengthEqualsLen:0', errorFn: () => {
        console.log("数组为0");
    }
});
strategy.addCacheTest([], {
    description: 'islengthEqualsLen1:0', errorFn: () => {
        console.log("数组为0");
    }
});
strategy.start();
console.log(strategy);