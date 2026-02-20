function isAnagram(s1, s2){
    if(s1.length !== s2.length) return false
    let freq={}

    for(let ch of s1){
        freq[ch]=(freq[ch] || 0)+1
        
    }

    for(let ch of s2){
        if(!freq[ch]){
            return false

        }
        freq[ch]--
    }
    return true
}

console.log(isAnagram("listen", "tensil"))
console.log(isAnagram("hello", "world"))
