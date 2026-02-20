def ArraySort(arr):
    n=len(arr)
    for i in range(n):
        for j in range(n-1-i):
            if arr[j]>arr[j+1]:
                arr[j], arr[j+1]=arr[j+1], arr[j]
    return arr

print(ArraySort([6,7,8,9,4,2,1]))

print(sorted([5,7,6,4,3,1,2]))