def reversePosition(str, k):
    return str[:k][::-1]+str[k:]

print(reversePosition("abcdef", 3))

def reverseArray(arr):
    left=0
    right=len(arr)-1
    while left<right:
        arr[left], arr[right]=arr[right], arr[left]
        left+=1
        right-=1
    return arr
print(reverseArray(["a", "p", "p","l","e"]))
def getMinDistance(num, target, start):
    n=len(num)
    for i in range(n):
        if start-i >=0 and num[start-i]==target:
            return i
        if start+i <n and num[start+i]==target:
            return i
print(getMinDistance([1,2,3,4,5],5,0))