def MinNumber(nums):
    min=nums[0]
    for i in range(1, len(nums)):
        if nums[i]< min:
            min=nums[i]
    return min


print(MinNumber([2,3,4,1]))
print(min([10, 203, 40, 50, 5, 9]))