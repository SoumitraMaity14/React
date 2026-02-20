function AschiChar(arr){
    for(i=0; i<arr.length; i++){
        let ch=arr[i]
        if(ch>="0" && ch<="9") continue
        if(ch>="a" && ch<="z") continue
        if(ch>="A" && ch<="z") continue
        return false
    }
    return true
}
console.log(AschiChar("djksjf32@"))