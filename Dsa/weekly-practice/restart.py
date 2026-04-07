def palindrome(s):
    left=0
    right=len(s)-1
    while left<right:
        if s[left]!=s[right]:
            return False
        left+=1
        right-=1
    return True

print(palindrome([1,2,1,2]))

def reverseArray(arr):
    left=0
    right=len(arr)-1
    while left<right:
        arr[left], arr[right]=arr[right], arr[left]
        left+=1
        right-=1
    return arr
print(reverseArray([1,2,3,4,5,6]))

def reverseShort(arr):
    return(arr[::-1])
print(reverseShort([1,2,3,4,5,6]))

def fabinosis(num):
    a=0
    b=1
    next=0
    for i in range(num):
        next=a+b
        a=b
        b=next
    return a
print(fabinosis(6))