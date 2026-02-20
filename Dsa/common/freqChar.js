function Freq(str){
    let freq={}
    for(let ch of str){
        freq[ch]=(freq[ch]||0)+1
    }
    let digit=""
    let digitCount=0
    for(let ch in freq){
        if(freq[ch]>digitCount){
            digitCount=freq[ch]
            digit=ch
        }
    }
    return {digit, digitCount}
}

console.log(Freq("apple"))