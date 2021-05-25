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

function findMax(intList) {
    return Math.max(intList)
}

let myArray = [1,2,4,7,5,9,10,15,13,19,25]


function findClosest(arr, m) {
    let ans = arr[0]
    let diff = Math.abs(m - arr[0])
    for (let i = 1; i < arr.length; i++) {
        let newdiff = Math.abs(m - arr[i])
        if (newdiff < diff) {
            diff = newdiff
            ans = arr[i]
        }
    }
    return ans
}

console.log(findClosest(myArray, 11))
//console shows 10
console.log(findClosest(myArray, 6))
//console shows 7




