// 自定义堆栈实现的函数递归调用

// f(1) = 1
// f(2) = 2 + f(1)
// f(3) = 3 + f(2)
// ...
// f(n) = m + f(n-1)

let stack = (() => {
    const queue = []

    function add(n) {
        queue.push({n, val: 0})
    }

    function pop() {
        return queue.pop()
    }

    function print() {
        console.log(JSON.stringify(queue))
    }

    return {
        add, pop, print
    }
})()

function main(n) {

    for(let i = n; i > 0; i--) {
        stack.add(i)
    }

    let m
    let f1
    while(m = stack.pop()) {
        //console.log(m)
        if (m.n === 1) {
            m.val = f1 = 1
        } else {
            m.val = m.n + f1
            f1 = m.val
        }
    }

    return f1
}

main(5)

function fab(n) {
    //console.log(n)
    if (n <= 1) return 1
    return n + fab(n - 1)
}
fab(5)