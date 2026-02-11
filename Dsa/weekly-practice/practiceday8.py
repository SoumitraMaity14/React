def isAccending(arr):
    for i in range(len(arr)):
        for j in range(len(arr)-1):
            if arr[j]> arr[j+1]:
                arr[j], arr[j+1]=arr[j+1], arr[j]
    return arr
print(isAccending([4,5,6,3,2,1]))

def isFactorial(arr):
    total=0
    for i in range(arr):
        total=total*i