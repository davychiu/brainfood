def isabundant(n):
    divs = []
    for x in range(1,int(n/2)+1):
        if n % x == 0:
            divs.append(x)
    if sum(divs) > n:
        return True
    else:
        return False

abun_nums = []
for x in range(12,28123):
    if isabundant(x):
        abun_nums.append(x)

abun_sums = []
for x in range(len(abun_nums)):
    for y in range(x,len(abun_nums)):
        temp_sum = abun_nums[x] + abun_nums[y]
        abun_sums.append(temp_sum)

not_abun_nums = []
for x in range(1,28123):
    if x not in abun_sums:
        not_abun_nums.append(x)

print sum(not_abun_nums)
