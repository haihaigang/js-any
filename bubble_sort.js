// 冒泡排序
// 依次比较邻近的两个值，逆序则交互

function bubbleSort(record) {
  let n = record.length

  for (let i = 0; i < n; i++) {
    let bubbled = true

    for (let j = n - 1; j > 0; j--) {
      if (record[j] < record[j - 1]) {
        swap(record, j, j-1)
        bubbled = false
      }
    }

    if (bubbled) {
      break
    }
    
  }

  return record
}


function swap(record, i, j) {
  let temp = record[i]
  record[i] = record[j]
  record[j] = temp
}

bubbleSort([10,23,4,1,23])