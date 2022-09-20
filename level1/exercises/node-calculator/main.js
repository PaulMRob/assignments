const readline = require("readline-sync");

const num1 = readline.question("Please enter your first number: ");
const num2 = readline.question("Please enter your second number: ");
const operator = readline.keyIn('do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply? ', { limit: ['a', 's', 'm', 'd'] });


if (operator === 'a') {
    let addResult = sum(num1, num2);
    console.log("the result is " + addResult);    

} else if (operator === 's') {
    let subResult = subtract(Number(num1), Number(num2));
    console.log("the result is " + subResult);
    
} else if (operator === 'm') {
    let multResult = multiply(Number(num1) * Number(num2));
    console.log("the result is " + multResult);

} else if (operator === 'd') {
    let divResult = divide(Number(num1) / Number(num2));
    console.log("the result is " + divResult);
}


function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}