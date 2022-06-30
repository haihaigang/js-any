"use strict"
// 尽在严格模式下生效，浏览器开启支持“尾调用”，目前 safari 支持
// 尾调用，函数的最后一句是返回另一个调用的函数，可复用堆栈帧

function a() {
    return b()
}
function b(){}

function add(n) {
    if (n < 1) return 1
    return n + add(n - 1);
}

add(10009)


// 尾调用形式
function fabTail(n, p = 0) {
    if (n < 1) return p
    return fabTail(n - 1, n + p)
}

// 非尾调用形式
function fabNoTail(n) {
    if (n < 1) return 1
    return n + fabNoTail(n - 1)
}

// 在 safari 下结果 fabNoTail 有上限，fabTail 没有上限
// fabNoTail(10009)
// fabTail(145300)