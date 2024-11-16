import { bench, group, run } from 'mitata'

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

bench('classes', () => {
  r = new B_1()
  count += r.foo
  count -= r.bar
})

bench('functions', () => {
  r = new B_2()
  count += r.foo
  count -= r.bar
})

await run()

r
console.log(count)
