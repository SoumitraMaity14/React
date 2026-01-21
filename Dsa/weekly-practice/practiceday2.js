function Reverse(arr) {
    let n = arr.length

    for (i = 0; i < n; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }

    }
    return arr
}
function ReverseWhile(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp

        left++
        right--
    }
    return arr
}

function ArraySort(arr) {
    let n = arr.length
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
function SumArray(arr) {
    count = 0
    for (let i = 0; i < arr.length; i++) {
        count = count + arr[i]
    }
    return count
}
function MaxMin(arr) {
    let max = arr[0]
    let min = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return { max, min }
}

function WordCount(arr) {
    arr=arr.toLowerCase().split(" ")
    let freq = {}
    for (i = 0; i < arr.length; i++) {
        let word = arr[i]
        if (freq[word]) {
            freq[word]++
        }
        else {
            freq[word] = 1
        }
    }
    return freq
}

console.log(Reverse([2, 3, 4, 5, 3, 2, 1, 6]))
console.log(ReverseWhile([4, 5, 6, 3, 2, 5]))
console.log(ArraySort([4, 5, 6, 3, 2, 1]))
console.log(SumArray([2, 3, 4, 5]))
console.log(MaxMin([2, 3, 5, 6, 5, 4]))
console.log(WordCount("this is a fucking boy who dont this how to fuck boy"))