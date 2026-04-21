def perfectNumber(num):
    if num<=1: return False

    def_total=1
    for i in range(2, int(num**0.5)+1):
        if num%i==0:
            def_total+=i
            if i != num//i:
                def_total+=num//i
    return def_total==num

print(perfectNumber(212))

def perfect_number(num):
    if num<=1: return False

    def_total=1

    for i in range(2, int(num**0.5)+1):
        if num%i==0:
            def_total+=i
            if i != num//i:
                def_total=num//i
    return def_total==num
print(perfect_number(28))