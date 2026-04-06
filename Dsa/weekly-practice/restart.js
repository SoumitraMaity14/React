function palindrome(s){
    let left=0
    let right=s.length-1
    while(left<right){
        if(s[left]!==s[right]){
            return false
        }
        left++
        right--
    }
    return true
}
console.log(palindrome("madaa"))

function reverseArray(arr){
    let left=0
    let right=arr.length-1
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    return arr
}
console.log(reverseArray([1,2,3,4,5,6]))