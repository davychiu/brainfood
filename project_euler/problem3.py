def sqrt(n):
    return n**0.5

def isprime(n):
    for x in range(2, int(sqrt(n))+1):
        if n % x == 0:
            return False
    return True

primes = [x for x in range(1, int(sqrt(600851475143))) if isprime(x)]

remainder = 600851475143

for prime in primes[::-1]:
    if remainder % prime == 0:
        print prime
        break


