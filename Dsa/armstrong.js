function armStrong(n){
    let str=n.toString()
    let power=str.length
    let total=0

    for(let ch of str){
        total+=Math.pow(Number(ch), power)
    }
    return total===n
}
console.log(armStrong(153))

function power(base, exp){
    let total=1
    for(let i=0; i<exp; i++){
 total=total*base
    }
    return total
       
}
console.log(3,4)

function armStrongwithPower(n){
    let str=n.toString()
    let exp=str.length
    let total=0

    for(let ch of str){
        total+=power(Number(ch), exp)
    }
    return total===n

}

console.log(armStrongwithPower(1634))