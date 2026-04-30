def mostWordsFound(words):
    max_word=0
    for word in words:
        max_count=word.count(' ')+1
        max_word=max(max_word, max_count)
    return max_word
print(mostWordsFound("this is a good", "this is a bad situation most"))

def finalState(nums, k, mulplier):
    for _ in range(k):
        max_index=0
        for i in range(len(nums)):
            if nums[i]<nums[max_index]:
                nums[i]=i
        nums[max_index]*=mulplier
    return nums
print(finalState([2,1,3,4,5], 5, 2))

def maxCountword(subset, sentences):
    sub_set=set(subset)
    count=0
    for sentence in sentences:
        ok=True
        for ch in sentence:
            if ch not in sub_set:
                ok=False
                break
        if ok==True:
            count+=1
    return count
print(maxCountword("cad",["ca", "d"]))

