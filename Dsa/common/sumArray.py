def SumArray(nums):
    total=0
    for i in range(len(nums)):
        total=total+nums[i]
    return total
print(SumArray([3,8,9,6]))

print(sum([4,5,6]))