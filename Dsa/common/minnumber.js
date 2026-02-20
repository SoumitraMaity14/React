function Minnumber(nums){
    let min=nums[0]
    for( let i=1; i<nums.length; i++){
        if(nums[i]<min){
            min=nums[i]
        }
    }
    return min
}
console.log(Minnumber([5,6,4,8,2]))

console.log(...[Math.min(4,5,7,1)])

const MinNumber=nums=>Math.min(...nums)
console.log(MinNumber([2,3,4,1]))