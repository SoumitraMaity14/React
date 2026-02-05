def fibonasis(n):
    a=0
    b=1
    for i in range(n):
        a, b=b, a+b
    return a

print(fibonasis(6))

def isPrime(n):
    if n<=1:
         return False
    for i in range(2, n):
        if(n%i)==0:
            return False
    return True
print(isPrime(5))
