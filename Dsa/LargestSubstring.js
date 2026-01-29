function LargetsSubstring(arr){
    let seen =new Set()
    let left=0
    let maxLength=0
    for(let i=0; i<arr.length; i++){
        while(seen.has(arr[i])){
            seen.delete(arr[left])
            left++
        }
        seen.add(arr[i])
        maxLength=Math.max(maxLength, i-left+1)
    }
    return maxLength
}

function CountArray(arr){
    let count=0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            count++
        }
    }
    return count
}

function CountEvenOdd(arr){
    let even=0
    let odd=0
    for(let i=0; i<arr.length; i++){
        let ch=arr[i]
        if(ch%2===0){
            even++
        }
        else odd++
    }
    return {even, odd}
}

console.log(LargetsSubstring("hdsafwueasdhkjasfa"))
console.log(CountEvenOdd([2,3,4,5,6,7,6,7,8]))
console.log(CountArray([2,3,4,5,6,6,6]))