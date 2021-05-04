function findExtraLetter(s, t) {
    //creating a copy of string t, to remove letters found in string s
    let ans = t  
    //iterating through every letter in string t
    for (let i = 0; i < t.length; i++) {
        //checking if letter is included in string s, removing the letter from s and ans if it does
        if ((s.includes(t[i])) && (ans.length > 1)) {
            s = s.replace(t[i], "")
            ans = ans.slice(1)
        } else {
            return t[i]
        }
    }
    return ans
}

//running a few different test cases to verify function working properly

console.log(findExtraLetter("abcd", "abcde"))
console.log(findExtraLetter("abcd", "abecd"))
console.log(findExtraLetter("abcd", "abbcd"))
console.log(findExtraLetter("abcd", "abcdb"))
console.log(findExtraLetter("cdab", "badcf"))
console.log(findExtraLetter("cdab", "bafdc"))