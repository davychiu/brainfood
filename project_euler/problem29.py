powers = set([])

for x in range(2,101):
    for y in range(2,101):
        powers.add(x**y)

print len(powers)
