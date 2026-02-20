def CountDigitLetter(num):
    digit=0 
    letter=0
    for i in num:
        if "0"<=i<="9":
            digit+=1
        if ("a"<=i<="z") or ("A"<=i<="Z"):
            letter+=1
    return digit,letter

print(CountDigitLetter("jhfjksdhfks32423"))