function fibonasis(n){
    let a=0, b=1
    for(let i=0; i<n; i++){
        let next =a+b
        a=b
        b=next

    }
    return a
}

function isPrime(n){
    if(n<=1) return false
    for(let i=2; i<n; i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

function isArmStrong(n){
    let str=n.toString()
    let power=str.length
    let total=0
    for(let ch of str){
        total+=Math.pow(Number(ch), power)
    }
    return total===n
}
console.log(fibonasis(6))
console.log(isPrime(3))
console.log(isArmStrong(152))

function reverse(arr){
    if(typeof arr==="string"){
        let str=""
        for(let i=arr.length-1; i>=0; i--){
            str+=arr[i]
        }
        return str
    }
    for(let i=0; i<arr.length/2;i++){
        let temp= arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=temp
    }
    return arr
}
console.log(reverse("sjfhsdfiuwe"))
console.log(reverse([5,4,3,2,1]))

function reverseWhile(arr){
    left=0
    right=arr.length-1
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    return arr
}
console.log(reverseWhile([4,3,2,1]))

function freqChar(str){
    
    let freq={}
    for(let ch of str){
        
        freq[ch]=(freq[ch]|0)+1
    }
    return freq
}
console.log(freqChar("sjfsjfkfjks"))