import string

data = open("names.txt","r").read()
names = sorted(data.replace("\n", "").replace('"',"").split(","))

alphadict = dict((x,i) for (i,x) in enumerate(map(str,string.uppercase)))

total = 0
for y in range(len(names)):
    total = total + sum([int(alphadict[x])+1 for x in map(str,names[y])]) * (y + 1)

print total
