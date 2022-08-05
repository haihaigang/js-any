function bucketSort(record, max) {
  let n = record.length
  let tempArray = record.slice(0, n)
  let count = new Array(max).fill(0)

  for (let i = 0; i < n; i++) {
    count[record[i]]++
  }

  for (let i = 1; i < max; i++) {
    count[i] += count[i - 1]
  }

  console.log(tempArray, count)

  for (let i = n - 1; i > 0; i--) {
    record[--count[tempArray[i]]] = tempArray[i]
  }

  return record
}

bucketSort([4,6,2,1,2,3,2,1,7,8,9,8], 10)