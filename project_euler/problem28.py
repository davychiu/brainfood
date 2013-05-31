diagsum = 0
number = 1
square = 3
offset = 0

while number + offset < 1001*1001+1:
    if square < 4:
        square = square + 1
    else:
        square = 1
        offset = offset + 2

    number = number + offset
    diagsum = diagsum + number

print diagsum
