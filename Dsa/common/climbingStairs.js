function climbingStairs(n){
    if(n<=2){
        return n
    }
    let prev1=2
    let prev2=1
    for(let i=3; i<n+1; i++ ){
        let next=prev1+prev2
        prev2=prev1
        prev1=next
    }
    return prev1
}
console.log(climbingStairs(5))