//Chapter 1.4 is Palindrome Permutation
const isPalPerm = (s) => {
    s = s.toLowerCase();
    let m = {};
    
    for (let i = 0, len = s.length; i < len; i++){
        m[s[i]] ? m[s[i]]++ : m[s[i]] = 1
    }
    
    let odds = 0;

    for (let k in m){
        if (m[k] % 2 != 0) odds++
    }

    return odds <= 1

}