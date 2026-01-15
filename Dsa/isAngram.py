def isAngram(s1, s2):
    if len(s1) != len(s2):
        return False
    freq={}

    for ch in s1:
        freq[ch]=freq.get(1, 0)+1
    for ch in s2:
        if ch not in freq or freq[ch]==0:
            return False
    return True

print(isAngram("lolol", "oolll"))

print(isAngram("fuck", "luck"))