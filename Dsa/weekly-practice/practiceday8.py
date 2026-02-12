def isAccending(arr):
    for i in range(len(arr)):
        for j in range(len(arr)-1):
            if arr[j]> arr[j+1]:
                arr[j], arr[j+1]=arr[j+1], arr[j]
    return arr
print(isAccending([4,5,6,3,2,1]))

def isFactorial(arr):
    total=1
    for i in range(1, arr+1):
        total=total*i
    return total
print(isFactorial(6))

def isCount(s):
    letter=0
    digit=0
    vowels=0
    consonent=0
    capital_letter=0
    small_letter=0
    for i in s:
        if "0"<=i<="9":
            digit+=1
        elif "a"<=i<="z":
            letter+=1
            small_letter+=1
            if i in "aeiou":
                vowels+=1
            else:
                consonent+=1
        elif "A"<=i<="Z":
            letter+=1
            capital_letter+=1
            if i in "AEIOU":
                vowels+=1
            else:
                consonent+=1
    return letter, vowels, consonent, capital_letter, small_letter

print(isCount("hjdsakjhd823809uHJDKJSHDFKSF923RJFNMNLWKWITWWEshdfjw"))