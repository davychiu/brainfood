n = 1
x = 0
y = 1
while len(str(y)) < 1000:
    temp = y
    y = x + y
    x = temp
    n = n + 1

print n, y
