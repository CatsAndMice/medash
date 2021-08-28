/**
 * 防抖:n秒后执行,如果n秒内再次触发，则重新计算执行时间
 * 节流:n秒内只执行一次
 */
class DebounceAndThrottle {
  constructor () {
    this.debounceTime = null
    this.throttleTime = null
  }

  /**
     * 防抖
     * @param {*} fn 回调函数
     * @param {*} wait 等待时间
     * @param {*} immediate 是否立即执行
     */
  debounce (fn, wait = 1000, immediate = false) {
    const self = this
    // 立即执行
    immediate && fn.call(this)
    return function () {
      self.debounceTime && clearTimeout(self.debounceTime)
      self.debounceTime = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait)
    }
  }

  /**
     * 取消防抖执行事件
     */
  cancelDebounce () {
    this.debounceTime && clearTimeout(this.debounceTime)
    this.debounceTime = null
  }

  /**
     * 节流
     * @param {*} fn 回调函数
     * @param {*} wait 等待时间
     */
  throttle (fn, wait = 1000, immediate = false) {
    const self = this
    immediate && fn()
    return function () {
      if (self.throttleTime) return
      self.throttleTime = setTimeout(() => {
        self.throttleTime = null
        fn.apply(this, arguments)
      }, wait)
    }
  }

  /**
     * 取消节流执行事件
     */
  cancelThrottle () {
    this.throttleTime && clearTimeout(this.throttleTime)
    this.throttleTime = null
  }
}

module.exports = new DebounceAndThrottle()
