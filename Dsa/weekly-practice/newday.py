def wordCount(str):
    str=str.lower().split()
    freq={}
    for i in str:
        if i in freq:
            freq[i]+=1
        else:
            freq[i]=1
    return freq
print(wordCount("this is this is"))