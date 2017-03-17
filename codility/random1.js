// http://stackoverflow.com/questions/4703047/review-of-a-codility-test-pair-sum-even-count

function assert(A, B) {
  console.log(A, 'should be', B, A === B)
  console.log('---')
}

function solution(A) {
  let odds = 0
  let evens = 0
  
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      evens++
    } else {
      odds++
    }
  }
  
  // even pairs is a combination of pairs of all even and odd numbers
  // nC2 = n! / (r! * (n - 2)!) reduces to (n * (n - 1)) / 2
  let evenPairs = (evens * (evens - 1) ) / 2
  let oddPairs = (odds * (odds - 1)) / 2
  
  let totalPairs = evenPairs + oddPairs
  
  if (totalPairs > 1000000000) { // 1e9
    return -1
  } else {
    return totalPairs
  }
}

assert(solution([3, 4, 2, 3]), 2)
assert(solution([1,2,3,4,5]), 4)
