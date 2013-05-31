path = 0
num = 0
for x in range(1,1000000):
    curnum = x
    curpath = 0
    while curnum > 1:
        if curnum % 2 == 0:
            curnum = curnum / 2
        else:
            curnum = 3 * curnum + 1
        curpath = curpath + 1
    if curpath > path:
        path = curpath
        num = x
print "num: " + str(num)
print path
