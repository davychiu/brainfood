function assert(A, B) {
  console.log(A, 'should be', B, A === B)
  console.log('---')
}

function solution(A) {
  // we know the dominant number if exists can be counted with a "rolling" counter
  let candidate = 0
  let count = 0
  
  for (let i = 0; i < A.length; i++) {
    if (count === 0) {
      candidate = A[i]
    }
    if (A[i] === candidate) {
      count++
    } else {
      count--
    }
  }
  let index = -1
  let finalCount = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      if (index < 0) index = i
      finalCount++
    }
  }
  
  if (finalCount > A.length / 2) {
    return index
  } else {
    return -1
  }
}

assert(solution([3, 4, 3, 2, 3, -1, 3, 3]), 0)
assert(solution([3, 3, 4, 4, 4, 3, 3]), 0)
assert(solution([3, 3, 4, 4, 4, 3, 3, 4]), -1)
assert(solution([0, 0, 1, 1, 1]), 2)
assert(solution([2, 1, 1, 1, 3]), 1)
