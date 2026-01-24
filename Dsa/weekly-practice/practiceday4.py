


def AschiChar(char):
    for i in char:
        if "0"<=i<="9":
            continue
        if "a"<=i<="z":
            continue
        if "A"<=i<="Z":
            continue
        return False
    return True

def freqChar(arr):
    freq={}
    maxcount=0
    maxword=""
    for i in arr:
        if(i in freq):
            freq[i]+=1
        else:
            freq[i]=1
    for i in freq:
        if freq[i]>maxcount:
            maxcount=freq[i]
            maxword=i
    return maxword, maxcount

print(AschiChar("hfjsdf8483"))
print(Aschi("hfjsdf8483"))
print(freqChar("apple"))