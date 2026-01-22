function Palindrome(arr){
    let left=0
    let right=arr.length-1
    while(left<right){
        if(arr[left]!=arr[right]){
            return false
        }
        left++
        right--
    }
    return true
}

function PlaindromeForLoop(arr){
    for(let i=0; i<arr.length/2;i++){
        if(arr[i] !=arr[arr.length-1-i]){
            return false
        }
    }
    return true
}
console.log(Palindrome("madam"))
console.log(PlaindromeForLoop("madams"))