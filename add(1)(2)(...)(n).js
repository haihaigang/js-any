// add(1)(3)(6)(9) => 19

function create(f) {
    let queue = []
    let going = false
    return function(n){
        queue.push(n)

        if (!going) {
            going = true

            while(queue.length) {
                value = f.call(null, queue.shift())
            }
            going = false
            return total
        }
    }
}

function bountadd() {
    // let args = [...arguments].reduce((a, b) => a+b)
    // let temp =  bountadd.bind(null, args)
    // temp.toString = function() {}
    // return temp
    let sum = [...arguments].reduce((a, b) => a+b)
    function ab(){
        sum += [...arguments].reduce((a, b) => a+b)
        return ab
    }

    ab.toString = function(){return sum}

    return ab
}
bountadd(1)(2)(3)