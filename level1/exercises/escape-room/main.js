const readline = require("readline-sync");
const name = readline.question("What is your name? ");
let gameOver = false; //game runs while the opposite of this condition is met.
let key = false; //user does not have the key while this condition is met

while (!gameOver) { //while lloop runs while condition is met
    
    let answer = readline.question(`Hi ${name}. 
        You find yourself locked in a room. 
        In order to escape the room, you need to find the key in the room and then open the door. 
        There's a small hole in the wall. 
        Would you like to:  
        [1] Put your hand in the hole? 
        [2] Find the key? 
        [3] Open the door?`
    );

    if (answer === "1") {
        console.log("You escaped the room... by dying :( ");
    } else if (answer === "2") {
        key = true; //now user has the key
        console.log("You found the key but you haven't used it yet.");
    } else if (answer === "3" && key === true) { //this line needs to be read before the next else if statement
        console.log("CONGRADULATIONS!! You made a successful escape :) ");
        gameOver = true;
    } else if (answer === "3" ) {
        console.log("You can't open the door without the key!");
    } else {
        console.log("Why dont you give it another try? LOL.");
    }
}