def shortestNumber(n, m):
    divisible_num=[]
    non_divisible_num=[]
    for i in range(1, n+1):
        if i%m==0:
            divisible_num.append(i)
        else:
            non_divisible_num.append(i)
    return sum(non_divisible_num)-sum(divisible_num)

print(shortestNumber(10, 3))