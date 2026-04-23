def targetArray(nums, index):
    target=[]
    for i in range(len(nums)):
        # list of insert(target, value)
        target.insert(index[i],nums[i])
    return target
print(targetArray([0,1,2,3,4],[0,1,2,2,1]))