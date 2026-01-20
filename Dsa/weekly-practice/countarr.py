def countarray(arr):
    count=0
    for i in arr:
        count+=1
    return count

print(countarray([2,2,3,4,4,5,6,7,8]))

def evenOdd(arr):
    even=0
    odd=0
    for i in arr:
        if i%2==0:
            even+=1
        else:
            odd+=1
    return even,odd

print(evenOdd([2,3,4,5,6,7,2,3,4,5,5,6]))

def wordletter(arr):
    word=0
    letter=0
    for i in arr:
        if "0"<=i<="9":
            word+=1
        if "a"<=i<="z":
            letter+=1
    return word, letter

print(wordletter("hdashjfuiwe783423852hdshj4553"))

def reverseArray(arr):
    return arr[::-1]
print(reverseArray([2,2,4,5,6,7,8,4,3,5]))

def reverser(arr):
    left=0
    right=len(arr)-1
    while left<right:
        arr[left], arr[right]=arr[right],arr[left]
        left+=1
        right-=1
    return arr
print(reverser([2,3,4,5,6,6,7,7]))

def arrayReverse(arr):
    n=len(arr)
    for i in range(n//2):
        arr[i], arr[n-1-i]=arr[n-1-i], arr[i]
    return arr
print(arrayReverse([2,3,4,5,6,6,6]))