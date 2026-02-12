def isAnagram(s1, s2):
    freq={}
    if len(s1) != len(s2):
        return False
    for i in s1:
        if i in freq:
            freq[i]+=1
        else:
            freq[i]=1
    for i in s2:
        if i not in freq or freq[i]==0:
            return False
        freq[i]-=1
    return True
print(isAnagram("appple", "ppplea"))

def removeDuplicate(char):
    freq={}
    total=""
    for i in char:
        if i not in freq:
            freq[i]=True
            total+=i
        
    return total
print(removeDuplicate("apple"))




