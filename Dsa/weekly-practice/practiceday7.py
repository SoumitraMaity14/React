def isPalindrome(arr):
    for i in range(len(arr)//2):
        if arr[i] !=arr[len(arr)-1-i]:
            return False
    return True
print(isPalindrome([1,2,3,2,1]))

def isPalindromeWhile(s):
    left=0
    right=len(s)-1
    while left<right:
        if s[left]!= s[right]:
            return False
        left+=1
        right-=1
    return True
print(isPalindromeWhile("madam"))

def isSum(arr):
    total=0
    for i in range(len(arr)):
        total+=arr[i]
    return total
print(isSum([3,4,5]))

def isEvenOdd(arr):
    even=0
    odd=0
    for i in arr:
        if i%2==0:
            even+=1
        else:
            odd+=1
    return even, odd
print(isEvenOdd([2,3,4,5,6]))