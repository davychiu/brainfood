def sqrt(n):
    return n**0.5

def isprime(n):
    for x in range(2, int(sqrt(n))+1):
        if n % x == 0:
            return False
    return True

primes = [2,3,5,7,11,13]
n = max(primes) + 2
while len(primes) < 10002:
    if isprime(n):
        primes.append(n)
    n = n + 2
print primes[10000]
