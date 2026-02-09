def isPrime(n):
    if n<=2:
        return False
    for i in range(2, n):
        if (n%i)==0:
            return False
    return True
print(isPrime(9))
print(isPrime(7))

def reverse(arr):
    if isinstance(arr, str):
        num_str=""
        for i in range(len(arr)-1, -1, -1):
            num_str+=arr[i]
        return num_str
    n=len(arr)
    for i in range(n//2):
        arr[i], arr[n-1-i]=arr[n-1-i], arr[i]
    return arr
print(reverse("fjskjdfjsk"))
print(reverse([6,5,4,3,2,1]))

def isFreq(s):
    freq={}
    for i in s:
        if i in freq:
            freq[i]+=1
        else:
            freq[i]=1
    return freq
print(isFreq("hjdfjsdfkjs"))
