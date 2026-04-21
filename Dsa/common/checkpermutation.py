def checkpermutation(str, words):
    set_str=set(str)
    count=0
    for word in words:
        it=True
        for ch in word:
            if ch not in set_str:
                it=False
        if it==True:
            count+=1
    return count

print(checkpermutation("cad",["cc","acd","b","ba","bac","bad","ac","d"]))