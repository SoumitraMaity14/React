function VowelsConsonet(arr){
    let vowels=0
    let consonent=0
    arr=arr.toLowerCase()
    for(let i=0; i<arr.length; i++){
        let ch=arr[i]
        if(ch>="a" && ch<="z"){
            if(ch==="a" || ch==="e" || ch==="i"|| ch==="o"||ch==="u"){
                vowels++
            }
            else{
                consonent++
            }
        }
    }
    return {vowels, consonent}

}
function mostFrequentVC(str){
    let freq={}
    let vowels="aeiou"
    for(let ch of str){
        freq[ch]=(freq[ch]||0)+1
    }
    let maxVowels=0
    let maxConsonent=0
    for(let ch in freq){
        if(vowels.includes(ch)){
            maxVowels=Math.max(maxVowels, freq[ch])
        }
        else{
            maxConsonent=Math.max(maxConsonent, freq[ch])
        }
    }
    return maxVowels+maxConsonent
}
console.log(mostFrequentVC("success"))
console.log(VowelsConsonet("jdhfsjafiwriuiqoczm"))