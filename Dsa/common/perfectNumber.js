function perfectNumber(num){
    if(num<=1){
        return false
    }
    let def_total=1
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0){
            def_total += i;
            if(i !==num/i){
                def_total+=num/i
            }
        }
    }
    return def_total===num
}
console.log(perfectNumber(212))