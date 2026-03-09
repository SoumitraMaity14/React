function sumAreEven(nums){
  let count=0
  for( let i=1; i<=nums; i++){
    let sum=0
    let n=i
    while(n>0){
      sum +=n%10
      n=Math.floor(n/10)
    }
    if(n%2===0){
      count++
    }
  }
  return count
}
console.log(sumAreEven(30))
