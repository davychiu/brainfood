import datetime
sundays = 0
for x in xrange(100):
    for y in xrange(12):
        if datetime.date(1901+x, 1+y, 1).weekday() == 6:
            sundays = sundays + 1
print sundays
