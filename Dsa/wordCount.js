function wordCount(arr){
    arr=arr.toLowerCase().split(" ")
    let freq={}
    for(let i=0; i<arr.length; i++){
        let word=arr[i]
        if(freq[word]){
            freq[word]++
        }
        else{
            freq[word]=1
        }
    }
    return freq
}
console.log(wordCount("this is this is a count a"))