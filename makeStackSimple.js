//  '5 10 20 50 85 1' -> [1, 170]
// 按照给定顺序入栈，每次入栈前比较栈中从栈顶一个个累加下去只要遇到和入栈的值相等
// 就把这些出栈，然后入栈这个值的 2 倍

function makeStackSimple(input) {
  let inStack = input.split(' ')
  let stack = []

  while (inStack.length > 0) {
    let inValue = parseInt(inStack.shift())
    let len = stack.length
    let total = 0
    let hasEqual = false
    for (let i = 0; i < len; i++) {
      total += stack[i]
      if (inValue === total) {
        hasEqual = true
        // console.log(i, len - i)
        stack.splice(0, i + 1)
        inStack.unshift(inValue * 2 + '')
        break
      }
    }

    if (!hasEqual) stack.unshift(inValue)
  }

  return stack
}

makeStackSimple('5 10 20 50 85 1')
