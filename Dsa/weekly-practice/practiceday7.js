function isPalindrome(arr){
    let n=arr.length
    for(let i=0; i<n/2; i++){
        if(arr[i]!=arr[n-1-i]){
            return false
        }
    }
    return true
}
console.log(isPalindrome("malayalam"))
function isPalindromeWhile(arr){
    left=0
    right=arr.length-1
    while(left<right){
        if(arr[left]!=arr[right]){
            return false
        }
        left++
        right--
    }
    return true
}
console.log(isPalindromeWhile([2,3,4,5,4,3,2]))

function isSum(arr){
    let total=0
    for(i=0; i<arr.length; i++){
        total+=arr[i]
    }
    return total
}
console.log(isSum([2,3,4,5]))

function isEvenOdd(arr){
    let even=0
    let odd=0
    for(let i=0; i<arr.length; i++){
        let ch=arr[i]
        if(ch%2===0){
            even++
        }
        else{
            odd++
        }
    }
    return {even, odd}
}

console.log(isEvenOdd([1,2,3,4,4,5,7,9,8]))