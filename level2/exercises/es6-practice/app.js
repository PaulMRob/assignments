const readline = require("readline-sync");

let manName = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", manName)
    return petObjects
}

runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot } 
    })
}
console.log(mapVegetables(carrots))

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) => person.friendly)
}

console.log(filterForFriendly(people))

//2
let doMathSum = (a, b) => (a + b)
console.log(doMathSum(5,7))

// 3
let produceProduct = (a, b) => (a * b)
console.log(produceProduct(6,6))

// 4
const person = {firstName: "Jane", lastName: "doe", age: 100}
let printString = () => `Hi ${person.firstName} ${person.lastName}, how does it feel to be ${person.age} ?`
console.log(printString(person))

// 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

let filterForDogs = (arr) => arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })

console.log(filterForDogs(animals))

// TEMPLATE LITERALS
const individual = {name: "Blane", location: "Hawaii"}
let welcome = () => `Hi ${individual.name}!
Welcome to ${individual.location}.
I hope  you enjoy your stay. Please ask the president of ${individual.location} if you need anything.`

console.log(welcome(individual))