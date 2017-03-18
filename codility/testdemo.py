def test(underTest, expected):
  testOk = 'OK ' if underTest == expected else 'NOK'
  print testOk + ' ' + str(underTest) + ' expected ' + str(expected)
  
def solution(A):
  sumLeft = 0
  sumRight = sum(A)
  
  for i, val in enumerate(A):
    sumRight -= val
    # print val, sumLeft, sumRight
    
    if sumLeft == sumRight:
      return i
    
    sumLeft += val
    
  return -1

test(solution([-1, 3, -4, 5, 1, -6, 2, 1]), 1)
test(solution([]), -1)
test(solution([0, 0, 0, 0]), 0)
test(solution([5, 3, 4]), -1)
