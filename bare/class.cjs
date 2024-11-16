require('./harness.cjs')

class A_1 {
  constructor () {
    this.foo = 42
  }
}
class B_1 extends A_1 {
  constructor () {
    super()
    this.bar = 42
  }
}
let r
let count = 0
bench('new Class()', () => {
  r = new B_1()
  count += r.foo
  count -= r.bar
})
console.log(count)
