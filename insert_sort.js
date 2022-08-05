// 插入排序
// 从数组开始选一个当前值，依次与前面每一个比较，比当前值大的则向后移动，直到比较完，将当前值插到合适位置

function insertSort(record) {
  let count = 0
  for (let i = 1; i < record.length; i++) {
    let temp = record[i]
    let j = i - 1

    while(j >= 0 && temp < record[j]) {
      record[j + 1] = record[j]
      j--
      count++
    }

    record[j + 1] = temp
  }
  console.log('insertSort2', count)

  return record
}

insertSort([34,21,3,10, 25])
// insertSort([34,25, 21,10, 3])
// insertSort([34,25, 21,10, 3])