function findExtraLetter(s, t) {
    let ans = t  
    for (let i = 0; i < t.length; i++) {
        if ((s.includes(t[i])) && (ans.length > 1)) {
            s = s.replace(t[i], "")
            ans = ans.slice(1)
        } else {
            return t[i]
        }
    }
    return ans
}

console.log(findExtraLetter("abcd", "abcde"))
console.log(findExtraLetter("abcd", "abecd"))
console.log(findExtraLetter("abcd", "abbcd"))
console.log(findExtraLetter("abcd", "abcdb"))
console.log(findExtraLetter("cdab", "badcf"))
console.log(findExtraLetter("cdab", "bafdc"))