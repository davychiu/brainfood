x = 1
y = 2
z = 0
while y < 4000000:
    temp = y
    y = x + y
    x = temp
    z = (z + x) if x % 2 is 0 else z
print z
