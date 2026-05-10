def countLengthIndex(n):
    index=0
    count=0
    for i in range(len(n)):
        index+=1
    for j in n:
        count+=1
    return count, index
print(countLengthIndex([2,2,3,4,4,5,6,7,8]))