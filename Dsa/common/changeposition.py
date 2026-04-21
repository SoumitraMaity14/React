def change_position(arr):
    n=len(arr)
    ans=[0]*n
    for i in range(n):
        ans[i]=arr[arr[i]]
    return ans
print(change_position([0,3,2,4,1,5,6]))