// add(1)(3)(6)(9) => 19

function add2() {
  let sum = [...arguments].reduce((a, b) => a + b)
  function ab() {
    sum += [...arguments].reduce((a, b) => a + b)
    return ab
  }

  ab.toString = function () {
    return sum
  }

  return ab
}
;+add2(1, 2)(3)(4, 5)

function add() {
  let args = [...arguments]
  let temp = add.bind(null, ...args)
  temp.toString = function () {
    return args.reduce((a, b) => a + b)
  }
  return temp
}
;+add(1, 2)(3)(4, 5)
