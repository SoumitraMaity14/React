def findFriendsOrder(order, friends):
    result=[]
    for postion in order:
        if postion in friends:
            result.append(postion)
    return result

print(findFriendsOrder([1,2,4,5,7],[2,7,5]))