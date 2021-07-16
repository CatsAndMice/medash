const FromTest = require('./FromTest');
const testFn = Symbol('触发提示私有方法'),
    moreConfig = Symbol('多个校验条件'),
    oneConfig = Symbol('单个校验条件');

/**
 * 策略模式实现表单校验
 */
class Strategy {
    FromTest = FromTest;
    cacheTest = [];
    [testFn](fn) {
        fn();
        return false;
    }

    [moreConfig](dataSource, config) {
        for (const conf of config) {
            this[oneConfig](dataSource, conf);
        }
    }

    [oneConfig](dataSource, config) {
        let { description, errorFn } = config,
            [methodName, value] = description.split(":");
        this.cacheTest.push({ dataSource, methodName, value, errorFn });
    }

    /**
     * 开始校验表单
     * @returns Boolean
     */
    start() {
        if (!this.cacheTest.length) return;
        while (this.cacheTest.length) {
            let test = this.cacheTest.shift(),
                { dataSource, methodName, value, errorFn } = test,
                isHaveMehtod = methodName in this.FromTest;
            if (isHaveMehtod) {
                if (!this.FromTest[methodName](dataSource, value)) {
                    return this[testFn](errorFn);
                }
            } else {
                console.warn(`${methodName}访方法不存在`);
                return false;
            }
        }
        return true;
    }

    /**
     * 表单校验添加至缓存区
     * @param {*} dataSource 需要校验表单值
     * @param {*} config 表单需要满足的要求
     */
    addCacheTest(dataSource, config) {
        let isArr = Array.isArray(config);
        isArr ? this[moreConfig](dataSource, config) : this[oneConfig](dataSource, config);
    }

}

module.exports = new Strategy();