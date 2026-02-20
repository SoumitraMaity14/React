function isSum(nums, target){
    let seen={}
    for(let i=0;i<nums.length; i++){
        let current=nums[i]
        let need=target-current

        if(seen[need] !== undefined){
            return [seen[need], i]
        }
        seen[current]=i
    }
    return []
}

function PlindromeWhile(arr){
    let left=0
    let right=arr.length-1
    while(left<right){
        if(arr[left] !== arr[right]){
            return false
        }
        left ++
        right--
    }
    return true
}
function PalindromeFor(arr){

    for(let i=0; i<arr.length/2;i++){
        if(arr[i] !== arr[arr.length-1-i]){
            return false
        }
    }
    return true
}
console.log(isSum([1,3,4,5,6,8], 9))
console.log(PlindromeWhile("madas"))
console.log(PalindromeFor("madas"))