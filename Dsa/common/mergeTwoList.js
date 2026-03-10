function mergeList(s1, s2){
    let dummy={val:-1, next: null}
    let current=dummy
    while(s1 !== null && s2 !== null){
        if(s1.val < s2.val){
            current.next=s1
            s1=s1.next
        }
        else{
            current.next=s2
            s2=s2.next

        }
        current=current.next
    }
    if(s1 !== null){
        current.next=s1
    }
    if(s2 !==null){
        current.next=s2
    }
    return dummy.next
}
function createList(arr){
    let dummy = { val: -1, next: null }
    let curr = dummy

    for (let num of arr){
        curr.next = { val: num, next: null }
        curr = curr.next
    }

    return dummy.next
}

let l1 = createList([1,2,2])
let l2 = createList([2,3,4])

console.log(mergeList(l1, l2))