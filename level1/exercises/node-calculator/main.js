const readline = require("readline-sync")

const num1 = readline.question("Please enter your first number: ");
const num2 = readline.question("Please enter your second number: ");
const operator = readline.keyIn('do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply? ', { limit: ['a', 's', 'm', 'd'] });


if (operator === 'a') {
    let addResult = parseInt(num1) + parseInt(num2);
    console.log("the result is " + addResult);    

} else if (operator === 's') {
    let subResult = parseInt(num1) - parseInt(num2);
    console.log("the result is " + subResult);
    
} else if (operator === 'm') {
    let multResult = parseInt(num1) * parseInt(num2);
    console.log("the result is " + multResult);

} else if (operator === 'd') {
    let divResult = parseInt(num1) / parseInt(num2);
    console.log("the result is " + divResult);
}

