def isArmstrong(n):
    num_str=str(n)
    power=len(num_str)
    total=0

    for ch in num_str:
        digit=int(ch)
        total+=digit**power
    return total==n
print(isArmstrong(153))