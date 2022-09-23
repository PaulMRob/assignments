const readline = require("readline-sync");
const name = readline.question("What is your name? ");
let count = 0;
while( count >= 0 ){
    let answer = readline.question(`Hi ${name}. 
        You find yourself locked in a room. 
        In order to escape the room, you need to find the key in the room and then open the door. 
        There's a small hole in the wall. 
        Would you like to:  
        [1] Put your hand in the hole? 
        [2] Find the key? 
        [3] Open the door?`
        
        );


    // if( answer === 1 ){
    //     console.log("You escaped the room... by dying :( ");
    // } else if( answer === 2 ){
    //     console.log("You found the key but you haven't used it.");
    // } else if( answer === 3 ){
    //     console.log("You can't open the door without the key!");
    // } else if( answer === 2 && 3){
    //     console.log("CONGRADULATIONS!! You made a successful escape :) ");
    // } else {
    //     console.log("Why dont you give it another try? LOL.");
    // }

    count++
    console.log(count)
}