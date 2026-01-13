function CounterDigitLetter(arr){
    let digit=0
    let letter=0
    for(i=0; i<arr.length; i++){
        let ch=arr[i]
        if(ch>="0" && ch<="9"){
            digit++
        }
        else if(ch>="a" && ch<="z"  || ch>="A" && ch<="Z"){
            letter++
        }

    }
return {digit, letter}
}
console.log(CounterDigitLetter("gduwrfsdfi241242"))