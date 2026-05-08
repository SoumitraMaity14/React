def armstrong(n):
    num_str=str(n)
    power=len(num_str)
    total=0

    for ch in num_str:
        num=int(ch)
        total+=num**power
    return total==n
print(armstrong(153))

def climbStairs(nums):
    if nums<=2:
        return nums
    prev1=2
    prev2=1
    for i in range(3, nums+1):
        next=prev1+prev2
        prev2=prev1
        prev1=next
    return prev1

print(climbStairs(5))