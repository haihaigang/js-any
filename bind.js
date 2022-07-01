// bind function the following steps:
// 1. Let Target be the this value.
// 2. If IsCallable(Target) is false, throw a TypeError exception.
// 3. Let F be ? BoundFunctionCreate(Target, thisArg, args).
// 4. Let L be 0.
// 5. Let targetHasLength be ? HasOwnProperty(Target, "length").
// 6. If targetHasLength is true, then
// a. Let targetLen be ? Get(Target, "length").
// b. If Type(targetLen) is Number, then
// i. If targetLen is +∞𝔽, set L to +∞.
// ii. Else if targetLen is -∞𝔽, set L to 0.
// iii. Else,
// 1. Let targetLenAsInt be ! ToIntegerOrInfinity(targetLen).
// 2. Assert: targetLenAsInt is finite.
// 3. Let argCount be the number of elements in args.
// 4. Set L to max(targetLenAsInt - argCount, 0).
// 7. Perform SetFunctionLength(F, L).
// 8. Let targetName be ? Get(Target, "name").
// 9. If Type(targetName) is not String, set targetName to the empty String.
// 10. Perform SetFunctionName(F, targetName, "bound").
// 11. Return F.


function slice(args) {
    return Array.prototype.slice.apply(args)
}
// let slice = Function.prototype.apply.bind(Array.prototype.slice)


Function.prototype.bind2 = function() {
    const that = this
    let args = slice(arguments)
    let obj = args.shift()
    return function() {
        args = args.concat(slice(arguments))
        return that.apply(obj, args)
    }
}

function print() {
    return slice(arguments)
    //.push(this.a)
}

const obj = {
    a: 1
}

print.bind2(obj, 5, 6)(7)

// core-js demo
// function bind(that /* , ...args */) {
//     var F = aCallable(this);
//     var Prototype = F.prototype;
//     var partArgs = arraySlice(arguments, 1);
//     var boundFunction = function bound(/* args... */) {
//       var args = concat(partArgs, arraySlice(arguments));
//       return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
//     };
//     if (isObject(Prototype)) boundFunction.prototype = Prototype;
//     return boundFunction;
// };