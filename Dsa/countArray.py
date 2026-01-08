def countArray(nums):
    count=0
    for i in range(len(nums)):
        if nums[i]%2 ==0:
            count=count+1
    return count

print(countArray([2,4,6,8,10,9,8,0,5]))
