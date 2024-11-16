require('./harness.cjs')

function A_2 () {
  this.foo = 42
}
function B_2 () {
  A_2.call(this)
  this.bar = 42
}
Object.setPrototypeOf(B_2.prototype, A_2.prototype)
Object.setPrototypeOf(B_2, A_2)
let r
let count = 0

bench('new Function()', () => {
  r = new B_2()
  count += r.foo
  count -= r.bar
})

console.log(count)
