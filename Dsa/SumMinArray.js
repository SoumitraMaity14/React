function SumofMinArray(arr, S) {
    let variableMin = 0
    let sumMin = Infinity
    let left = 0
    for (let right = 0; right < arr.length; right++) {
        variableMin += arr[right]
        while (variableMin >= S) {
            sumMin = Math.min(sumMin, right - left + 1)
            variableMin -= arr[left]
            left++
        }
    }
    return sumMin === Infinity ? 0 : sumMin

}

console.log(SumofMinArray([2, 3, 4, 3, 5, 2], 7))