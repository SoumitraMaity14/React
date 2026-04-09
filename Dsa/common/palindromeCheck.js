function palindromeCheck(s){
    function palidrome(left, right){
        while(left<right){
            if(s[left] !=s[right]){
                return false
            }
            left++
            right--
        }
        return true
    }
    let left=0
    let right=s.length-1
    while(left< right){
        if(s[left]!=s[right]){
            return palidrome(left+1, right) || palidrome(left, right-1)
        }
        left++
        right--
    }
    return true
}
console.log(palindromeCheck("abc"))