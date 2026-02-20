def CountArray(arr):
    count=0
    for i in arr:
        count+=1
    return count

def CountEvenOdd(arr):
    even=0
    odd=0
    for i in arr:
        if i%2==0:
            even+=1
        else:
            odd+=1
    return even, odd

def LargetstringCount(arr):
    seen=set()
    left=0
    maxLength=0
    for i in range(len(arr)):
        while arr[i] in seen:
            seen.remove(arr[left])
            left+=1
        seen.add(arr[i])
        maxLength=max(maxLength, i-left+1)
    return maxLength
print(CountArray([3,4,5,6,7,7,4,5,6,7,9]))
print(CountEvenOdd([2,3,5,4,5,3,4,4,3,3,3,6,4,3]))
print(LargetstringCount("jhdajfsjdjshaajka"))
