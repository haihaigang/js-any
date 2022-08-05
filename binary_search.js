function binarySearch(array, target) {
  let start = 0
  let end = array.length
  let mid = parseInt((start + end) / 2)

  while(end >= start) {
    if (array[mid] === target) return mid

    if (array[mid] > target) {
      end = mid
    } else if (array[mid] < target) {
      start = mid
    }

    mid = parseInt((start + end) / 2)
  }
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 2)