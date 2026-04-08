def climbingStairs(n):
    if n<=2:
        return n
    prev1=2
    prev2=1
    for i in range(3, n+1):
        next=prev1+prev2
        prev2=prev1
        prev1=next
    return prev1
print(climbingStairs(5))