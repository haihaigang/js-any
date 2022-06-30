function OVB() {
    this.bo = 'beat me'

    this.setBo = function(bo) {
        this.bo = bo
    }

    this.print = function(){
        console.log(this.bo)
        return this.bo
    }
}

OVB.prototype.haha = function(){
    return 'haha'
}

OVB.heihei = function(){
    return 'hei'
}

function A() {}

A.prototype = new OVB()


function B(){}

B.prototype = new OVB()

var a1 = new A()
var b1 = new B()
var a2 = new A()

a1.print()
a2.print()
b1.print()

A.prototype.bo = 'beat jay'

a1.print()
a2.print()

a1.__proto__.bo = 'beat yang'
a1.print()
a2.print()