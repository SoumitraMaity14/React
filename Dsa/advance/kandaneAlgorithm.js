function kandanesAlgorithm(arr){
    let currentSum=arr[0]
    let maxSum=arr[0]
    for(let i=1; i<arr.length; i++){
        currentSum=Math.max(arr[i], currentSum+arr[i])
        maxSum=Math.max(currentSum, maxSum)
    }
    return maxSum
}
console.log(kandanesAlgorithm([2,3,4,-6,-3,1,5]))