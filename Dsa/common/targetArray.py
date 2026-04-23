def targetArray(nums, index):
    target=[]
    for i in range(len(nums)):
        # list of insert(target, value)
        target.insert(index[i],nums[i])
    return target
print(targetArray([0,1,2,3,4],[0,1,2,2,1]))

def minimum_distance(n):
    # s=str(n)
    # left=0
    # right=len(s)-1
    # mirror=0
    # while left<right:
    #     mirror+=abs(int(s[left])-int(s[right]))
    #     left+=1
    #     right-=1
    # return mirror
    return abs(n- int(str(n)[::-1]))
print(minimum_distance(25))