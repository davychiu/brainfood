def numberofdivisors(n):
    divisors = 1
    sqrt = int(n**0.5)
    for x in range(1, sqrt+1):
        if n % x == 0:
            divisors = divisors + 2
    if sqrt**2 == n:
        divisors = divisors - 1
    return divisors

num = 0
n = 1
while numberofdivisors(num) < 501:
    num = num + n
    n = n + 1

print num
