def max_num(nums):
    max=nums[0]
    for i in range(1, len(nums)):
        if nums[i]> max:
            max=nums[i]
    return max
print(max_num([4,6, 3, 30, 40, 20]))

print(max([3, 6, 7, 8, 9]))