def VowelsConsonent(arr):
    arr=arr.lower()
    vowels=0
    consonent=0
    for i in arr:
        if "a"<=i<="z":
            if i in "aeiou":
                vowels+=1
            else:
                consonent+=1
    return vowels,consonent

print(VowelsConsonent("hjfdsahjqriqpa"))