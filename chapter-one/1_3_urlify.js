//Chapter 1.3 - Replace spaces with '%20'

const urlify = (s) => {
    return s.trim().replace(/ /g, '%20');
}

console.log(urlify('john smith'))
console.log(urlify('john  smith       '));