def count_smallerNumbersThanCurrent(nums):
    result=[]
    for i in range(len(nums)):
        count=0
        for j in range(len(nums)):
            if i !=j and nums[i]> nums[j]:
                count+=1
        result.append(count)
    return result
print(count_smallerNumbersThanCurrent([4,0,1,2,2,3]))