def sumofdivs(n):
    divsum = 1
    for x in range(2,int(n/2)+1):
        divsum = divsum + x if n % x == 0 else divsum
    return divsum

total = 0
temp = []
for x in range(1,10000):
    divsum = sumofdivs(x)
    if x not in temp and x == sumofdivs(divsum) and divsum != x:
        total = total + x + divsum
        temp.append(divsum)
        print divsum, x
print total
