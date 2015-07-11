// find the sum of all numbers where the sum of the
// factorials for their digits equal the number itself

function factorial(num) {
  return num > 1 ? num * factorial(num - 1) : 1;
}
var factLookup = (function(arr) { 
  for (var i = 0;  i < 10; i++) { arr.push(factorial(i)); }
  return arr;
})([]);
var factSumMemo = {};
function factorialSum(num) {
  var sum = 0;
  var numStr = num.toString();
  var normalizedNum = numStr.split('').sort().join('');
  if (factSumMemo[normalizedNum]) {
    return factSumMemo[normalizedNum];
  } else {
    for (var i = 0; i < numStr.length; i++) {
      sum += factLookup[parseInt(numStr[i])];
    }
    factSumMemo[normalizedNum] = sum;
    return sum;
  }
}
function computeP34() {
  var total = 0;
  for (var i = 3; i < 9999999; i++) {
    var sum = factorialSum(i);
    if (sum === i) {
      total += i;
      console.log(i, total);
    }
  }
  return total;
}
console.log(factLookup);
var result = computeP34();
console.log(result);
