function SumArray(nums){
    let total=0
    for (let i=0; i<nums.length; i++){
        total=total+nums[i]
    }
    return total
}
console.log(SumArray([2,3,5,9]))

const sum=arr=> {return arr.reduce((total, nums)=>{ return total + nums}, 0)}
console.log(sum([2,3,4,5]))

const arr=[2, 56, 5, 4, 7]

const newSum=arr.reduce((total, nums)=> {return total +nums}, 0)

console.log(newSum)