// problem 36: compute sum of all numbers under one million
// that are palindromes in base 10 and 2

function isPalindrome(numStr) {
  for (var i = 0; i < numStr.length / 2; i++) {
    if (numStr[i] !== numStr[numStr.length - 1 - i])
      return false;
  }
  return true;
}

function compute() {
  var total = 0;
  for (var i = 0; i < 1000000; i++) {
    if (isPalindrome(i.toString()) && isPalindrome(i.toString(2))) {
      total += i;
    }
  }
  return total;
}

var result = compute();
console.log(result);
