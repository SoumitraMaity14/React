function countArray(arr){
    let count=0
    for (let i=0; i<arr.length; i++){
        count++
    }
    return count
}
function EvenOdd(arr){
    let even=0
    let odd=0
    for(let i=0; i<arr.length; i++){
        let ch=arr[i]
        if(ch%2===0){
            even++
        }
        else{
            odd++
        }
    }
    return {even, odd}
}

function DigitLetter(arr){
    let digit=0
    let letter=0
    for(i=0; i<arr.length; i++){
        let ch=arr[i]
        if(ch>="0" && ch<="9"){
            digit++
        }
        if(ch>="a" && ch<="z"){
            letter+=1
        }
    }
    return {digit, letter}
}

function reverseArray(arr){
    let left=0
    let right=arr.length-1
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left+=1
        right-=1
    }
    return arr
}

function reverseArrayFor(arr){

    let n=arr.length
    for(let i=0; i<n/2; i++){
        let temp=arr[i]
        arr[i]=arr[n-1-i]
        arr[n-1-i]=arr[i]
    }
    return arr
}
console.log(countArray([2,3,4,5,6,7,8,8,9,0]))
console.log(EvenOdd([2,3,4,5,6,6,7,4,6,2,2]))
console.log(DigitLetter("jfdhjkshfwoireuw83942wehd89weejdw234829432"))
console.log(reverseArray([2,3,4,5,6,6,7,4,6,2,2]))
console.log(reverseArrayFor([2,3,4,5,6,6]))