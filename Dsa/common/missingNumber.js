function missingNumber(arr){
    let n=arr.length
    let total=n*(n+1)/2
    let current=0
    for(let i=0; i<n; i++){
        current=current+arr[i]
    }
    return total-current

}
console.log(missingNumber([0,1,2,3,4,5,6,8]))