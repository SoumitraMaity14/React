def countLengthIndex(n):
    index=0
    count=0
    for i in range(len(n)):
        index+=1
    for j in n:
        count+=1
    return count, index
print(countLengthIndex([2,2,3,4,4,5,6,7,8]))

def arraySort(arr):
    n=len(arr)
    for i in range(n):
        for j in range(n-1-i):
            if arr[j]<arr[j+1]:
                arr[j], arr[j+1]=arr[j+1], arr[j]
    return arr
print(arraySort([2,3,4,5]))

def aimplesort(arr):
    return arr[::-1]
print(aimplesort([2,3,4,5]))

def aschi(n):
    for i in n:
        if "0"<=i<="9":
            continue
        if "a"<=i<="z":
            continue
        if "A"<=i<="Z":
            continue
        return False
    return True
print(aschi("hjadgajdjkie893@"))