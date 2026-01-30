def maxSum(nums, k):
    maxVarriable=0
    maxSum=0
    for i in range(k):
        maxVarriable+=nums[i]
    maxSum=maxVarriable
    for i in range(k, len(nums)):
        maxVarriable+=nums[i]
        maxVarriable-=nums[i-k]

        maxSum=max(maxSum, maxVarriable)
    return maxSum

def CountWord(str):
    str=str.lower().split()
    freq={}
    for i in str:
        if i in freq:
            freq[i]+=1
        else:
            freq[i]=1
    return freq

def CountlwtterDigit(str):
    digit=0
    letter=0
    for i in str:
        if "0"<=i<="9":
            digit+=1
        if "a"<=i<="z":
            letter+=1
    return digit, letter
        
print(maxSum([2,3,4,5,3,3,5,2], 3))
print(CountWord("this is this is"))
print(CountlwtterDigit("dhbahjgew7385rrhwejf34"))