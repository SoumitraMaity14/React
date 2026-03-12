function fibonasis(s){
    let a=0, b=1
    for(let i=0; i<s; i++){
        let next=a+b
        a=b
        b=next
    }
    return a
}
console.log(fibonasis(6))