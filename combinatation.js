let result = []
function comb(arr, k, m) {
  let len = arr.length
  let ids = []
  if (k === m) {
    result.push(arr.join(''))
  } else {
    for (let i = k; i <= m; i++) {
      swap(arr, k, i)
      comb(arr, k + 1, m)
      swap(arr, k, i)
    }
  }
}

function swap(arr, k, m) {
  let temp = arr[k]

  arr[k] = arr[m]
  arr[m] = temp
}

comb('abc'.split(''), 0, 2)
