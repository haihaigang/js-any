/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  return method2(s)
}

function method1(s) {
  let len = s.length
  let sArray = s.split('')
  let os = new Set()
  let ans = 0
  let rk = -1

  for (i = 0; i < len; i++) {
    if (i != 0) {
      os.delete(sArray[i - 1])
    }

    while (rk + 1 < len && !os.has(sArray[rk + 1])) {
      os.add(sArray[rk + 1])
      rk++
    }

    ans = Math.max(ans, rk - i + 1)
    //console.log(rk, os, ans)
  }

  return ans
}

function method2(s) {
  let ans = 0
  let start = 0
  let end = 0
  let len = s.length

  while(true) {
    if (end >= len) {
      start += 1
      end = start
    }
    if (start >= len) {
      break
    }

    end++
    let ss = s.substring(start, end)
    if (new Set(ss.split('')).size === ss.length) {
      ans = Math.max(ans, ss.length)
    } else {
      start += 1
      // end = start
      end -= 2
    }
  }

  return ans
}


function method3(s) {
  let ret = 0
  let start = 0
  let set = new Set()

  while (start < s.length) {
    let c = s.charAt(start)
    if (!set.has(c)) {
      set.add(c)
      ret = Math.max(ret, set.size)
    } else {
      // 删除第一个元素
      let [first] = set.values()
      set.delete(first)
      continue
    }
    start++
  }

  return ret
}