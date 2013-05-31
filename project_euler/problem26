def numrepeatfrac(n):
    decimal = str(n)
    if decimal[0] == decimal[1] or decimal[1] == decimal[2]:
        return 1
    for x in range(1,len(decimal)/2):
        if decimal[0:x] == decimal[x:x+x]:
            return x

y = 0
z = 0
for x in range(999,2,-1):
    tempnum = numrepeatfrac(10**5000/x)
    if tempnum > y:
        y = tempnum
        z = x
    
print "length: ", y, "number: ", z
