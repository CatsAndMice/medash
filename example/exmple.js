(function () {
  const funcPrototype = Function.prototype
  funcPrototype._before = function (cb) {
    const self = this
    return function () {
      cb.apply(this, arguments)
      self.apply(this, arguments)
    }
  }

  funcPrototype._after = function (cb) {
    const self = this
    return function () {
      self.apply(this, arguments)
      cb.apply(this, arguments)
    }
  }
})()

function fn () {
  console.log('fn')
}
function fn1 () {
  console.log('fn1')
}
function fn2 () {
  console.log('fn2')
}
const f = fn._before(fn1)._before(fn2)
f()
