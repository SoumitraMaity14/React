function CountEvenArray(nums){
    let count=0
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 2 === 0){
            count=count+1
        }
    }
    return count
}
console.log(CountEvenArray([2,5,4,6,8,1,4]))
