function isCount(str){
    let digit=0
    let letter=0
    let vowels=0
    let consonent=0
    let capital_letter=0
    let small_letter=0
    for(let i=0; i<str.length; i++){
        let ch=str[i]
        if(ch>="0" && ch<="9"){
            digit++
        }
        else if(ch>="a" && ch<="z"){
            letter++
            small_letter++
            if(ch==="aeiou"){
                vowels++
            }
            else{
                consonent++
            }
            
        }
        else if(ch>="A" && ch<="Z"){
            letter++
            capital_letter++
            if(ch==="AEIOU"){
                vowels++
            }
            else{
                consonent++
            }
        }
    }
    return {digit, letter, small_letter, capital_letter, vowels, consonent}
}
console.log(isCount("dfhsjdf3894hjdjw923AHJDAKJ8839AJeoriwe"))

function isFactorial(num){
    let total=1
    for(let i=1; i<=num; i++){
        total=total*i
    }
    return total
}
console.log(isFactorial(6))

function isAccendingOrder(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}


console.log(isAccendingOrder([5,6,7,4,3,2]))