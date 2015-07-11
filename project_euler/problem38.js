// problem 38: largest pandigital number of 5 digits

function getPandigital(num) {
  var factor = 2;
  var pandigital = num.toString();
  for (; pandigital.length < 9; factor++) {
    pandigital += (num * factor).toString();
  }
  if (pandigital.length === 9) {
    var testNum = ['1','2','3','4','5','6','7','8','9'];
    for (var i = 0; i < testNum.length; i++) {
      if (pandigital.indexOf(testNum[i]) === -1) return '';
    }
    return parseInt(pandigital);
  } else {
    return 0;
  }
}
function compute() {
  var max = 0;
  for (var i = 1; i < 10000; i++) {
    var pd = getPandigital(i);
    if (pd > max) {
      max = pd;
    }
  }
  return max;
}

var result = compute();
console.log(result);

