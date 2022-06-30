function of(o) {
    return Object.getPrototypeOf(o)
}

let map = new Map()

function add(o) {
    map.set(map.size + 1, o)
}

// number string boolean array function object symbol

add(1)
add(Number(true))
add(new Number(1))

add(true)
add(Boolean(1))
add(new Boolean(true))

add("1")
add(String(123))
add(new String())

add([])
add(new Array())
add(Array())

function Fun(){}
add(Fun)
add(new Fun())

class Abc{print(){}}
add(Abc)
add(new Abc())

add({})
add(new Object())

map.forEach((v,k) => {
    console.log('ori:', v, '__proto__', of(v))
})