def reverseArray(arr):
    left=0
    right=len(arr)-1
    while left<right:
        arr[left], arr[right]=arr[right], arr[left]
        left+=left+1
        right-=right-1
    return arr

print(reverseArray([2,3,4,5,6]))

def reverse(arr):
    return arr[::-1]

print(reverse([2,4,5,6,7]))
