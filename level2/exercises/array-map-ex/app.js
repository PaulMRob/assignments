const readline = require("readline-sync");

// 1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {
    return arr.map(function(n) {
        return n * 2
    })
}

console.log(doubleNumbers([2, 5, 100]))

// 2) Take an array of numbers and make them strings

function stringItUp(arr) {
    return arr.map(function(n) {
        return JSON.stringify(n)
    })
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

//3) Capitalize the first letter of each name and make the rest of the characters lowercase

function capitalizeNames(arr) {
    return arr.map(function(n) {
        return n[0].toUpperCase() + n.slice(1).toLowerCase()
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// 4) Make an array of strings of the names

function namesOnly(arr) {
    return arr.map(function(n){
        return n.name
    })
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr) {
    return arr.map(function (n) {
        if (n.age > 18) {
            return n.name + " can go to the matrix."
        } else { return n.name + " is under age and cannot go to the matrix!"}    
    })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))

// 6) Make an array of the names in h1s, and the ages in h2s 

function readyToPutInTheDOM(arr) {
    return arr.map(function(n) {
       return `<h1>${n.name}</h1><h2>${n.age}</h2>`
    })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]


const numArr = [3,4,5]
let numArr2 = numArr.reduce((final, curr) => final += curr, 0)
console.log(numArr2)