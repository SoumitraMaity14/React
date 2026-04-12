def check_palindrome(nums):
    def palindrome(left, right):
        while left<right:
            if nums[left]!= nums[right]:
                return False
            left+=1
            right-=1
        return True
    left=0
    right=len(nums)-1
    while left<right:
        if nums[left]!=nums[right]:
            return palindrome(left+1, right) or palindrome(left, right-1)
    return True

print(check_palindrome("abca"))