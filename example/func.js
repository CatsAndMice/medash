// class Func extends Function {
//     constructor() {
//         super();
//     }
//     after() {
//         console.log(this);
//     }
// }
// function fn() {
//     console.log('fn');
// }
// fn.prototype = new Func();
// console.log(fn.prototype.after);

// function fn() { }
// fn.prototype.after = () => {
//     console.log(1);
// }
// console.log(fn.after);

class JobLink {
  constructor (fn) {
    this.fn = fn
    this.next = null
  }

  setNext (nextJobLink) {
    this.next = nextJobLink
  }

  possSuccess () {
    const res = this.fn.apply(this, arguments)
    if (res) {
      return this.next && this.next.possSuccess.apply(this.next, arguments)
    }
  }
}

const j1 = new JobLink(() => {
  console.log(1)
  return true
})
const j2 = new JobLink(() => {
  console.log(2)
  return true
})
const j3 = new JobLink(() => {
  console.log(3)
})
j1.setNext(j2)
j2.setNext(j3)
j1.possSuccess()
