def ReduceStepsZero(num):
    steps=0
    while num>0:
        if num%2==0:
            num=num//2
        else:
            num=num-1
        steps+=1
    return steps
print(ReduceStepsZero(10))

def digitCountNumber(num):
    count=0
    for ch in str(num):
        digit=int(ch)
        if num%digit==0:
            count+=1
    return count
print(digitCountNumber(1248))