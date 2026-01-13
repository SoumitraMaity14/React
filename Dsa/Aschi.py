def Aschi(num):
    for i in num:
        if "0"<=i<="9":
            continue
        if "a"<=i<="z":
            continue
        if "A"<=i<="Z":
            continue
        return False
    return True
print(Aschi("hfjsd@f8483"))