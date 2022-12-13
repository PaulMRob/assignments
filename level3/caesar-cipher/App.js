var readline = require('readline-sync');

function caesar(input, shift) {
    var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
    var shift = parseInt(readline.question('How many letters would you like to shift? '));

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    // const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    // Method using ASCII Table that I do not understand :)
    // let encryptedInput = ""
    // for (let i = 0; i < input.length; i++) {
    //     let char = input[i]
    //     if (char === " ") {
    //         encryptedString += " "
    //         continue
    //     }

    //     let asciiCode = input.charCodeAt(i) + shift
    //     if (asciiCode > 122) {
    //         asciiCode -= 26
    //     }
    //     encryptedString += String.fromCharCode(asciiCode)
    // }
   
    let inputIndices = []
   
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            inputIndices.push(' ')
        }
        for (let j = 0; j < alphabet.length; j++) {
           if (input[i] === alphabet[j]) {
                inputIndices.push(j)
            }
        }
    }
    let shiftedIndices = []
    
    for (let i = 0; i < inputIndices.length; i++) {
        if (inputIndices[i] === ' ') {
            shiftedIndices.push(' ')
        } else {
            shiftedIndices.push(inputIndices[i] + shift)
        }
    }
    arrOfShiftedLetters = []

    for (let i = 0; i < shiftedIndices.length; i++) {
        if (shiftedIndices[i] === ' ') {
            arrOfShiftedLetters.push(' ')
        }
        for (let j = 0; j < alphabet.length; j++) {
            if (shiftedIndices[i] === j) {
                arrOfShiftedLetters.push(alphabet[j])
            }
        }
    }
    const stringWithCommas = arrOfShiftedLetters.toString()
    
    encryptedString = stringWithCommas.split(',').join('')


    var phrase = input.split('').map(letter => {
        if (alphabet.includes(letter)) {
            let position = alphabet.indexOf(letter) + shift % 26
            return alphabet[position]
        } else {
            return letter
        }
    })    
    console.log(phrase.join(''))
    
}

caesar()