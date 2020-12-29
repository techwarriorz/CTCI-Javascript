//1.2 - Check is a String is a Permutation of another string
const isPermutation = (s1, s2) => {
    return s1.split('').sort().join('') == s2.split('').sort().join('');
}

console.log(isPermutation('aab', 'aba')) //True
console.log(isPermutation('abc', 'aaa')) //False