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
console.log(VowelsConsonet("jdhfsjafiwriuiqoczm"))