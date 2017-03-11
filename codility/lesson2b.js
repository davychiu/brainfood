function solution(A, K) {
  let length = A.length
  return A.slice(length - K % length, length).concat(A.slice(0, length - K % length))
}
