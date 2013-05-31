import sys
import string

data = sys.stdin.readlines()
text = data[0].replace("\n", "").lower()
offset = string.lowercase.index(data[1].replace("\n", ""))
index = int(data[2].replace("\n", ""))-1

newalpha = string.lowercase[offset:26] + string.lowercase[0:offset]
alphadict = dict((x,i) for (i,x) in enumerate(map(str,newalpha)))
sorted_text = sorted([int(alphadict[x]) for x in map(str,text)])

print newalpha[sorted_text[index]]

