def ArraySort(arr):
    n=len(arr)
    for i in range(n):
        for j in range(n-1-i):
            if arr[j]>arr[j+1]:
                arr[j], arr[j+1]=arr[j+1], arr[j]
    return arr

def ReverseArray(arr):
    n=len(arr)
    for i in range(n):
        for j in range(n-1-i):
            arr[j], arr[j+1]=arr[j+1], arr[j]
    return arr

def MaxMin(arr):
    max=arr[0]
    min=arr[0]
    for i in arr:
        if i> max:
            max=i
        if i<min:
            min=i
    return max, min

def WordCount(arr):
    freq={}
    arr=arr.lower().split()
    for i in arr:
        if i in freq:
            freq[i]+=1
        else:
            freq[i]=1
    return freq

print(ArraySort([4,5,6,7,3,4,2]))
print(ReverseArray([5,4,3,2,2,1]))
print(MaxMin([2,3,4,5]))
print(WordCount("today my thought is my thought"))
   