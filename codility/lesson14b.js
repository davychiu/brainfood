
// input: int K block size, int M max value, int array A values
// output: MIN sum of largest block
// divide A into K blocks and determine least largest block sum of all combinations
// 
// approah: use binary search to "guess" the answer and verify directly
function solution(K, M, A) {
  // we know that the answer is somewhere between the largest number
  // and the sum of the all the array elements (case where all 0's)
  let lowerBound = Math.max(...A)
  let upperBound = A.reduce((acc, val) => { return acc + val }, 0)
  let result = -1
  
  while (lowerBound <= upperBound) {
    let guessedSum = Math.floor((upperBound + lowerBound) / 2)
    
    // need to test the guessedSum by trying it againt sequential groups directly
    guessedSumIsPossible = true
    let currentSum = 0
    let blockCount = 1
    for (let elem of A) {
      if (currentSum + elem <= guessedSum) {
        currentSum += elem
      } else {
        currentSum = elem
        blockCount++
      }
      
      if (blockCount > K) {
        guessedSumIsPossible = false
        break
      }
    }
  
    if (guessedSumIsPossible) {
      // possible correct answer, OR
      result = guessedSum
      // it means the guessed sum was too high, set upperBound to guess
      upperBound = guessedSum - 1
    } else {
      // it means the guessed sum was too low, set lowerBound to guess plus 1
      lowerBound = guessedSum + 1
    }
  }
  
  return result
}
