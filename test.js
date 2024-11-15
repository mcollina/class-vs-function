import cronometro from 'cronometro'

class A_1 {
  constructor () {
    this.foo = 42
  }
}

class B_1 extends A_1 {
  constructor () {
    super()
    this.bar = 43
  }
}

function A_2 () {
  this.foo = 42
}

function B_2 () {
  A_2.call(this)
  this.bar = 43
}

Object.setPrototypeOf(B_2.prototype, A_2.prototype)
Object.setPrototypeOf(B_2, A_2)

const results = cronometro({
  async classes () {
    new B_1()
  },
  async functions () {
    new B_2()
  }
}, {
  iterations: 100 * 1000 * 1000
})
