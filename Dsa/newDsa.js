function ArmstrongNumber(n){
    let str=n.toString()
    let power=str.length

    let total=0

    for(let ch of str){
        total+=Math.pow(Number(ch), power)
    }
    return total===n
}
console.log((ArmstrongNumber(123)))
