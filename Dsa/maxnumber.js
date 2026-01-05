function max_nums(nums){
    let max=nums[0]
    for(let i=1; i<nums.length; i++){
        if(nums[i]>max){
            max=nums[i];
        }
    }
    return max
}
console.log(max_nums([2, 3, 4, 9]))
console.log(...[Math.max(7,3,4,6)])
console.log(...[Math.min(2,4,5,6,1)])

const MaxNumber=nums=>Math.max(...nums)
console.log(MaxNumber([2,5,9]))