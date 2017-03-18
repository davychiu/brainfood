# two non-negative integers N and M are said to be similar if their decimal
# representations can be obtained from each other by arranging their digits.

import math

def test(underTest, expected):
  testOk = 'OK ' if underTest == expected else 'NOK'
  print testOk + ' ' + str(underTest) + ' expected ' + str(expected)
  
memo = {}  
def memfact(n):
  if n in memo:
    return memo[n]
  else:
    memo[n] = math.factorial(n)
    return memo[n]
  
# more optimal solution at O(N) time complexity 
def solution(N):
  digits = map(int, str(N))
  totalPerms = memfact(len(digits))
  digitCount = {}
  
  if N < 10:
    return 1
  
  # create a hash table of each digit with its number of occurence
  for (i, val) in enumerate(digits):
    if val in digitCount:
      digitCount[val] += 1
    else:
      digitCount[val] = 1
  
  # remove perms with duplicated digits not 0
  # note duplicated digits create factorial multiple copies of their occurence
  for (i, val) in digitCount.iteritems():
    if val > 1 and i > 0:
      totalPerms = totalPerms / memfact(val)
      
  # remove perms with 0 in front if exists a 0
  # we know zero perms is in the form of (length of N - 1)!
  # finally remove perms duplicated by multiple 0's if exists
  if 0 in digitCount:      
    zeroPerms = totalPerms / len(digits)
    totalPerms = totalPerms / memfact(digitCount[0]) - zeroPerms
  
  return totalPerms

test(solution(1213), 12)
test(solution(0), 1)
test(solution(1112), 4)
test(solution(100), 1)
test(solution(100112), 40)
test(solution(1002), 6)
test(solution(12345), 120)
test(solution(11112), 5)
test(solution(11102), 16)
test(solution(11110), 4)
