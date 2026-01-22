def Palindrome(arr):
    left=0
    right=len(arr)-1
    while left<right:
        if arr[left] != arr[right]:
            return False
        left+=1
        right-=1
    return True


def PalindromeForLoop(arr):
    for i in range(len(arr)//2):
        if arr[i] != arr[len(arr)-1-i]:
            return False

    return True
print(Palindrome("madam"))
print(Palindrome("madams"))
print(PalindromeForLoop("madam"))
print(PalindromeForLoop("madams"))