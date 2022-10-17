const readline = require("readline-sync")

// Green circle: Rest Operator
// 1)
let collectAnimals = (...animals) => console.log(animals)

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "mouse", "beaver");

// 2)
let combineFruit = (fruit, sweets, vegetables) => { 
    return { fruit, sweets, vegetables } 
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

// 3)
function parseSentence({location, duration}) {
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
}))

// 4)
items = ["crysknife", "stilsuit", "thumper"]
function returnFirst(items) { 
    const [firstItem] = items
    return firstItem
}

console.log(returnFirst(items))

// 5)
const favoriteActivities = ["napping", "playing in snow", "belly rubs", "rolling in grass", "eating"];

function returnFavorites(arr) {
    const [firstFav, secondFav, thirdfav] = arr
    return `Meeka's top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdfav}`
}
console.log(returnFavorites(favoriteActivities))

// BLUE SQUARE
// 1)
function combineAnimals(...args) {
    let arr = []
    args.forEach(args => {
        arr = [...arr, ...args]
    })
    return arr
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
const fakeAnimals = ["dragon", "orc", "troll"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, fakeAnimals))

// BLACK DIAMOND
// 1)
let product = (a, b, c, d, e) => {
    var numbers = [a, b, c, d, e];
    return numbers.reduce((acc, number) =>  acc * number, 1)
}

console.log(product(1,2,3,4,5))

// 2)
let array = [6,7,8]
let unshift = (a, b, c, d, e, array) => [a, b, c, d, e, ...array]

console.log(unshift(...[1, 2, 3, 4, 5, array])) 

// 3)
let populatePeople = (arr) => {
    return arr.map( (name) => {
        name = name.split(" ");
        firstName = name[0]
        lastName = name[1]
        return {firstName, lastName} 
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
