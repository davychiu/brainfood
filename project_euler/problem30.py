powers = []
x = 2

while True:
    _sum = sum([n**5 for n in map(int,str(x))])
    if _sum == x:
        powers.append(x)
        print x
    x = x + 1
    if len(powers) > 5:
        break

print sum(powers)
