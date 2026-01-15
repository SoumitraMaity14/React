def WordCount(word):
    word=word.lower().split()
    freq={}
    for i in word:
        if i in freq:
            freq[i]+=1
        else:
            freq[i]=1
    return freq

print(WordCount("this is a is this"))