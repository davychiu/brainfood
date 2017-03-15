function solution(A) {
  let total = ((A.length + 2) * (A.length + 1)) / 2
  return A.reduce((acc, v) => { return acc - v }, total)
}
