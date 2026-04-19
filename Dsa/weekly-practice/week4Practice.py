def divisible_nonDivisible(n,m):
    divisible_num=[]
    non_divisible_num=[]
    for i in range(1, n+1):
        if i%m==0:
            divisible_num.append(i)
        else:
            non_divisible_num.append(i)
    return sum(non_divisible_num)-sum(divisible_num)
print(divisible_nonDivisible(10,3))

def binary_search(arr, t):
    left=0
    right=len(arr)-1
    while left<=right:
        mid=(left+right)//2
        if arr[mid]==t:
            return mid
        elif arr[mid]<t:
           left= mid+1
        else:
            right=mid-1
    return left
print(binary_search([1,2,4,5],6))

def divisible_num(num, k):
    return sum(num)%k
print(divisible_num([2,3,4],4))

def reverse_num(n,v):
    return n[:v][::-1]+n[v:]
print(reverse_num("abcdef",3))

def climb_stairs(n):
    if n<=2: return n
    prev1=2
    prev2=1
    for i in range(3, n+1):
        next=prev1+prev2
        prev2=prev1
        prev1=next
    return prev1
print(climb_stairs(5))