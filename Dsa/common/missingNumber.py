def missingNumber(arr):
    n=len(arr)
    total=n*(n+1)//2
    current=sum(arr)
    return total-current
print(missingNumber([0,1,2,3,4,5,6,8]))