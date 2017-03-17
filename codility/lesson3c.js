function solution(A) {
  let sumRight = A.reduce((acc, v) => { acc += v; return acc }, 0)
  let sumLeft = 0
  let minDiff = Infinity
  
  for (let i = 0; i < A.length - 1; i ++) {
    sumRight -= A[i]
    sumLeft += A[i]
    
    minDiff = Math.min(Math.abs(sumLeft - sumRight), minDiff)
  }
  
  return minDiff
}
