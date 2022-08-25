// 实现一个数组拍平方法，接受指定层数的拍平，默认为完全拍平
// 禁止使用  Array.prototype.flat
// flatten([1, [2, [3, [4]], 5]])    // [1, 2, 3, 4, 5])
// flatten([1, [2, [3, [4]], 5]], 1) // [1, 2, [3, [4]], 5]
// flatten([1, [2, [3, [4]], 5]], 2) // [1, 2, 3, [4], 5]
function flatten(array, depth) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      if (depth === undefined) {
        result = result.concat(flatten(array[i]))
      } else {
        result = result.concat(flatten(array[i], depth--))
      }
    } else {
      result.push(array[i])
    }
  }

  return result
}

flatten([1, [2, [3, [4]], 5]])
