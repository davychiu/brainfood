// input: array A plank start, array B plank end, array C nail positions
// output: minimal number of "nails" required
// 
// approach: use binary search to "guess" the answer and verify directly
function solution(A, B, C) {
  // we know that the answer is somewhere between one (all planks overlap)
  // and the total number of nails, or -1 if nails are insufficient
  let lowerBound = -1
  let upperBound = C.length
  let result = -1
  
  while (lowerBound <= upperBound) {
    // console.log('---')
    let guessedNumber = Math.floor((upperBound + lowerBound) / 2)
    let guessedCorrectly = true
    // console.log(lowerBound, upperBound, guessedNumber)
    // console.log('---')

    // to verify the correct answer, we need to check that all the planks have
    // at least one nail; however a direct solution is N * M time complexity (two nested 
    // loops through planks and then nails)
    // eg.  
    // [ ----  -- ] planks
    // [   i  i   ] nails
    // 
    // we need to use a math trick (cumulative/prefix sum) to reduce the time complexity
    // to N + M by letting us compute the sum (of nails) between two points in constant time
    // and an initial setup of N + M
    // nailsPreSum is a "lookup" table of all possible positions for planks. the problem 
    // defines all possible plank postions as 1 to C.length. we +1 just to include 0
    // in our lookup (for 0-indexed arrays since possible numbers start from 1).
    // 

    let nailsPreSum = Array(C.length * 2 + 1).fill(0)
    for (let i = 0; i < guessedNumber; i++) {
      nailsPreSum[C[i]] = 1
    }
    // console.log(nailsPreSum)
    for (let i = 1; i < C.length * 2 + 1; i++) { // note initial i
      nailsPreSum[i] = nailsPreSum[i - 1] + nailsPreSum[i]
    }
    // console.log(nailsPreSum)
    
    // verify each plank has nails
    for (let i = 0; i < A.length; i++) {
      let nailsInPlank = nailsPreSum[B[i]] - nailsPreSum[A[i] - 1]
      
      if (nailsInPlank === 0) {
        guessedCorrectly = false
        break
      }
    }
    
    if (guessedCorrectly) {
      result = guessedNumber
      upperBound = guessedNumber - 1
    } else {
      lowerBound = guessedNumber + 1
    }
  }
  
  return result
}
