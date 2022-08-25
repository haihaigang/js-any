// @ 分隔的字符串，前面是总字符数量，后面为已使用的
// 要求计算出剩下的字符数量，按照相同的格式输出
// 格式为 c:2,d:1
// 要求字符顺序不变，值为 0 不输出

// 'a:3,b:5,c:2@a:1,b:2' -> 'a:2,b:3,c:2'
function getLimit(str) {
    let [allStr, usedStr] = str.split('@')
    
    let allMap = new Map()
    allStr.split(',').forEach(item => {
        let [key, value] = item.split(':')
        allMap.set(key, parseInt(value))
    })
    
    let usedMap = new Map()
    usedStr.split(',').forEach(item => {
        let [key, value] = item.split(':')
        usedMap.set(key, parseInt(value))
    })
        
    let res = []
    for(let [key, value] of allMap) {
        value = value - (usedMap.has(key) ? usedMap.get(key) : 0)
        if (value > 0)
          res.push(`${key}:${value}`)
    }
    return res.join(',')
}

getLimit('a:3,b:5,c:2@a:1,b:2')