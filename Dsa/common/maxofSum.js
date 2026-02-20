function maxSumArr(nums, k) {
    let maxVariable = 0
    let maxSum = 0
    for (let i = 0; i < k; i++) {
        maxVariable += nums[i]
    }
    maxSum = maxVariable
    for (let i = k; i < nums.length; i++) {
        maxVariable += nums[i]
        maxVariable -= nums[i - k]

        maxSum = Math.max(maxSum, maxVariable)
    }
    return maxSum

}

function CountWord(str) {
    str = str.toLowerCase().split(" ")
    let freq = {}
    for (let i = 0; i < str.length; i++) {
        let ch = str[i]

        freq[ch] = (freq[ch] || 0) + 1

    }
    return freq
}

function CountLetterDigit(str){
    let letter=0
    let digit=0
    for(let i=0; i<str.length; i++){
        let ch=str[i]
        if(ch>="0" && ch<="9"){
            digit++
        }
        if(ch>="a" && ch<="z"){
            letter++
        }
    }
    return {letter, digit}
}

console.log(CountLetterDigit("872349hwedh8ey2hkjad89324ehdsiiay"))

console.log(CountWord("this is a fuck boy who fuck this is"))
console.log(maxSumArr([1, 2, 3, 4, 5, 6, 7], 3))