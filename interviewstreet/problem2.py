import sys

data = sys.stdin.readlines()

for n in data:
    n = int(n.replace("\n",""))
    sqrt = int(n**0.5)
    combo = 1 if n is 0 else 0
    temp = []
    while sqrt > int(n**0.5/2+1):
        diff = n - sqrt**2
        if diff**0.5 % 1 == 0:
            if diff in temp:
                break
            else:
                combo = combo + 1
                temp.append(sqrt**2)
        sqrt = sqrt - 1
    print combo
