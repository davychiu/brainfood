# two non-negative integers N and M are said to be similar if their decimal
# representations can be obtained from each other by arranging their digits.

import math

def test(underTest, expected):
  testOk = 'OK ' if underTest == expected else 'NOK'
  print testOk + ' ' + str(underTest) + ' expected ' + str(expected)
  
  
# naive solution using Heap's permutation alorithm
def solution(N):
  digits = map(int,str(N))
  permutations = dict([(str(digits), 1)])
  c = [0] * len(digits)
  
  i = 0
  while i < len(digits):
    if  c[i] < i:
      if i & 1 == 0:
        digits[0], digits[i] = digits[i], digits[0]
      else:
        digits[c[i]], digits[i] = digits[i], digits[c[i]]
      
      if str(digits) not in permutations and digits[0] != 0:
        permutations[str(digits)] = 1
      c[i] += 1
      i = 0
    else:
      c[i] = 0
      i += 1
      
  return len(permutations)
    
  
test(solution(1213), 12)
test(solution(0), 1)
test(solution(1112), 4)
test(solution(100), 1)
test(solution(100112), 40)
test(solution(1002), 6)
