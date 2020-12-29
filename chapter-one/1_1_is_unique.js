//1.1 - Check if Every Character in a String is Unique

//Single Line Solution
const solutionOne = (str) => {
    return str.length === [...new Set(str.split(''))].length
}

//Map Solution
const solutionTwo = (str) => {
    const map = {};
    for (let i = 0, len = str.length; i < len; i++){
        if (map[str[i]]) return false
        map[str[i]] = true
    }
    return true
}

//Using indexOf and lastIndexOf
const solutionThree = (str) => {
    for (let i = 0, len = str.length; i < len; i++){
        if (i !== str.lastIndexOf(str[i])) return false;
    }
    return true;
}


//Test Solution One
console.log(solutionOne("abc")) //Returns True
console.log(solutionTwo("aab")) //Returns False

//Test Solution Two
console.log(solutionTwo("abc")) //Returns True
console.log(solutionTwo("aab")) //Returns False

//Test Solution Three
console.log(solutionThree("abc")) //Returns True
console.log(solutionThree("aab")) //Returns False

