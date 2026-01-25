function Angram(s1, s2) {
    if (s1.length !== s2.length) return false
    let freq = {}

    for (let i in s1) {
        let ch=s1[i]
        if (ch in freq) {
            freq[ch]+=1
        }
        else {
            freq[ch] = 1
        }
    }
    for (i in s2) {
        let ch=s2[i]
        if (!freq[ch]) {
            return false
        }
        freq[ch]--
    }
    return true
}
console.log(Angram("madam", "damaa"))