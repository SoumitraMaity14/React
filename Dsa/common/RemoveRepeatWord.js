function RemoveRepeatWord(str){
    let word={}
    let result=""
    for(let i of str){
        if(!word[i]){
            word[i]=true
            result+=i
        }
    }
    return result
}

function IsAnagram(s1, s2){
    if(s1.lenght !== s2.lenght) return false
    let freq={}
    for(let ch of s1){
        freq[ch]=(freq[ch]|0)+1
    }
    for(let ch of s2){
        if(!freq[ch]){
            return false
        }
        freq[ch]--
    }
    return true
}

function removeRepeat(str){
    let word={}
    for(let i of str){
        if(word[i]){
            return true
        }
        word[i]=true
    }
    return false
}
console.log(RemoveRepeatWord("Applle"))
console.log(IsAnagram("apple", "paale"))

console.log(removeRepeat([1,2,3]))