const FromTest = require('./FromTest');

/**
 * 策略模式实现表单校验
 */
class StrategyFromTest {
    FromTest = FromTest;
    cacheTest = [];
    _triggerErrorFn(fn) {
        fn();
        return false;
    }

    _moreConfig(dataSource, config) {
        for (const conf of config) {
            this._oneConfig(dataSource, conf);
        }
    }

    _oneConfig(dataSource, config) {
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
                    return this._triggerErrorFn(errorFn);
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
        isArr ? this._moreConfig(dataSource, config) : this._oneConfig(dataSource, config);
    }

}

module.exports = new StrategyFromTest();