function Reverse(arr){
    let n=arr.length
    
    for(i=0; i<n; i++){
        for(j=0; j<n-1-i; j++){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
        
    }
    return arr
}
function ReverseWhile(arr){
    let left=0
    let right=arr.length-1
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp

        left++
        right--
    }
    return arr
}

function ArraySort(arr){
    let n=arr.length
    for(i=0; i<n; i++){
        for(j=0;j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
function SumArray(arr){
    count=0
    for(let i=0; i<arr.length; i++){
        count=count+arr[i]
    }
    return count
}

console.log(Reverse([2,3,4,5,3,2,1,6]))
console.log(ReverseWhile([4,5,6,3,2,5]))
console.log(ArraySort([4,5,6,3,2,1]))
console.log(SumArray([2,3,4,5]))