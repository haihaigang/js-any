"use strict"
// 仅在严格模式下生效，且浏览器开启支持“尾调用”，目前 safari 支持
// 尾调用，函数的最后一句是返回另一个调用的函数，可复用堆栈帧

// 尾调用形式
// a 的返回结果就是 b 执行完成的结果
function a() {
    return b()
}
// 非尾调用形式
// a1 的返回结果需要等待 b 执行完成后，在计算 +1 后才能返回
function a1() {
    return 1 + b()
}
function b(){}

// 递归下的尾调用

// 非尾调用形式
function fabNoTail(n) {
    if (n < 1) return 1
    return n + fabNoTail(n - 1)
}
// 尾调用形式
function fabTail(n, p = 0) {
    if (n < 1) return p
    return fabTail(n - 1, n + p)
}

// 在 safari 下结果 fabNoTail 有上限，fabTail 没有上限
// 在 chrome 下 “堆栈溢出”
// fabNoTail(40000)
// fabTail(145300)


// 解决尾递归堆栈溢出的方法
// 1 改成循环的形式
// 2 增加一个蹦床函数
// 3 实现尾调用方法

function fib(n) {
    if (n <= 0) return 0
    if (n === 1) return 1
    return fib(n-1) + fib(n-2)
}

// 0
// 1
// 1
// 1+1=2
// 1+2=3
// 2+3=5
function fibTail(n, ret = 0, next = 1) {
    if (n === 0) return ret
    let temp = next
    next = ret + next
    ret = temp
    return fibTail(n - 1, ret, next)
    // 简便写法
    // return fibTail(n - 1, next, ret + next)
}

// 1 循环
function fibLoop(n) {
    let i = 0
    let ii = 1
    while(n--) {
        let iii = i + ii
        i = ii
        ii = iii
        // 简便写法
        // [i, ii] = [ii, i + ii]
    }
    return i
}

// 2 蹦床函数
function tran(f) {
    while (f && f instanceof Function) {
        f = f()
    }
    return f
}
function fibTailFake(n, ret = 0, b = 1) {
    if (n === 0) return ret
    return fibTailFake.bind(this, n - 1, b, ret + b)
}
tran(fibTailFake(5))

// 3 自定义实现尾调用
function createCustomTail(f) {
    let queue = []
    let doing = false
    return function() {
        queue.push(arguments)
        if (!doing) {
            doing = true
            while(queue.length) {
                value = f.apply(null, queue.shift())
            }
            doing = false
            return value
        }
    }
}

const fibTailCustom = createCustomTail(function(n, ret=0, b=1) {
    if(n === 0) return ret
    return fibTailCustom(n-1, b, ret+b)
})

fibTailCustom(5)