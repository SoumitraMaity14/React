def largestSubstring(s):
    seen=set()
    left=0
    maxLength=0
    for i in range(len(s)):
        while s[i] in seen:
            seen.remove(s[left])
            left+=1
        seen.add(s[i])
        maxLength=max(maxLength, i-left+1)
    return maxLength

print(largestSubstring("bbbb"))
