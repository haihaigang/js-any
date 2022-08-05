function selectSort(record) {
  for (let i = 0; i < record.length - 1; i++) {
    
    let smallest = i
    for (let j = i + 1; j < record.length; j++) {
      if (record[j] < record[smallest]) {
        smallest = j
      }
    }

    if (record[smallest] < record[i]) {
      swap(record, i, smallest)
    }
  }

  return record
}

function swap(record, i, j) {
  let temp = record[i]
  record[i] = record[j]
  record[j] = temp
}


selectSort([23,1,32,5,10])