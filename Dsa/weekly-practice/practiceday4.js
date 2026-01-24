function AschiChar(arr){
    for(i=0; i<arr.length; i++){
        let ch=arr[i]
        if(ch>="0" && ch<="9") continue
        if(ch>="a" && ch<="z") continue
        if(ch>="A" && ch<="Z") continue

        return false
    }
    return true

}

function newAschichar(arr){
    for(let i=0; i<arr.length; i++){
        let ch=arr[i]
        if((ch>="0" && ch<="9") || (ch>="A" && ch<="Z") || (ch>="a" && ch<="z")){
            return false
        }
    }
    return true
}

function freqchar(str){
    freq={}
    for(let ch of str){
        freq[ch]=(freq[ch]|| 0)+1
    }
    let maxcount=0
    let maxchar=""
    for(let ch in freq){
        if(freq[ch]>maxcount){
            maxcount=freq[ch]
            maxchar=ch
        }
    }
    return {maxchar, maxcount}
}
console.log(AschiChar("njdshsjkfh874534jhfjhsd"))
console.log(newAschichar("sdkfjhsdjfuiew237483$"))
console.log(freqchar("Apple Apple"))