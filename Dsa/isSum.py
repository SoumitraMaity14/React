def isSum(nums, target):
    seen={}
    for i in range(len(nums)):
        current=nums[i]
        need=target-current
        if need in seen:
            return [seen[need], i]
        seen[current]=i
    return []
def PalindromeFor(arr):
    for i in range(len(arr)//2):
        if arr[i] != arr[len(arr)-1-i]:
            return False
    return True

def PalindromeWhile(arr):
    left=0
    right=len(arr)-1
    while left<right:
        if arr[left] != arr[right]:
            return False
        left+=1
        right-=1
    return True
print(isSum([1,3,4,6,7,5,9], 11))
print(PalindromeFor("madam"))
print(PalindromeFor("apple"))
print(PalindromeWhile("madam"))
print(PalindromeWhile("apple"))