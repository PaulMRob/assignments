const readline = require("readline-sync");

// 1 ) Write a function that takes an array of numbers and returns the largest(without using Math.max())

function largest(a){
let num = 0;
    for (let i = 0; i < a.length; i ++){
        if (a[i] >= num){
            num = a[i];
        }
    }
    return num;
}

// console.log(largest([1, 2, 3, 4, 5]));
// console.log(largest([7,67,55,99,100000000]));

// 2 ) Write a function that takes an array of words and a character and returns each word that has that character present.

function lettersWithStrings(a, b) {
let char = null;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (j = a[i][j]) {
                char = a[i];
            }
        }
    }
    return char;
}

// console.log(lettersWithStrings(["hello", "buggy", "gap!"], "!"));

// 3 ) Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1, num2){
    let divisible = false;
    if (num1 % num2 === 0) {
        divisible = true;
    } 
    return divisible;
}

// console.log(isDivisible(4,2));
// console.log(isDivisible(4,5));
