def armStrong(n):
    nums_str=str(n)
    power=len(nums_str)
    total=0

    for ch in nums_str:
        digit=int(ch)
        total+=digit**power
    return total==n

print(armStrong(153))