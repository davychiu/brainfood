function solution(N) {
    let b = N.toString(2)
    let gap = 0
    let GAP = 0
    
    for (let i = 1; i < b.length; i++) {
        if (b.charAt(i) === '0') {
            gap++
        } else {
            if (gap > GAP) GAP = gap
            gap = 0
        }
    }
    return GAP
}
