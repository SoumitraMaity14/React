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

const evenNumber=nums=>nums.reduce((count, num)=>{return count+(num%2===0)}, 0 )
console.log(evenNumber([2,4,5,6,7,8]))

const oddNumber=nums=>nums.filter(n=>n%2!==0).length