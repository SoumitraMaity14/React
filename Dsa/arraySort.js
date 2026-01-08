function ArraySort(arr){
    let n= arr.length
    for(i=0; i<n; i++){
        for(j=0; j<n-1-i; j++){
            if(arr[j]> arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }

        }
    }
    return arr
}
console.log(ArraySort([2,5,7,1,4,3]))