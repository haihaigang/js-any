Function.prototype.bind2 = function(obj, ...args) {
    const that = this
    // let args = [...arguments]
    // let obj = args.shift()
    // console.log(args)
    return function() {
        return that.call(obj, ...args)
    }
}

function print(b, c) {
    return this.a + b + c
}

const obj = {
    a: 1
}

print.bind2(obj, 5, 6)()