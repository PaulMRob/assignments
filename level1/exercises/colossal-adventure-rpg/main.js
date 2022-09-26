const readline = require("readline-sync");
    
const greeting = readline.question("Greetings Aspriring Human. Today begins your proving.");
const name = readline.question("Please give us your name.");
let walking = readline.question("Let's take a walk [W]");

let enemyHP = 10;
let battle = false;

function Player(){
this.PlayerName = name
this.hp = 20
this.inventory = []
}

let enemies = [
{
name: 'greg',
hp: 10,
item: 'Glass'
},
]

while (userHP > 0) {
    walk();
}

// handles walking
function walk() {
    let evilChaos = (Math.floor(Math.random() * 3) + 1);
    console.log("walk is running");
    if (evilChaos === 2) {
        console.log("You encounter a Wild Enemy.");
        return enemyEncounter();
    } else {
        readline.question(`you walked ${Math.floor(Math.random() * 100)} meters.`);
    }
}

// handles encounter with wild enemy
function enemyEncounter() {
    const wildEnemyArmy = ["Greg", "Shelby", "Steve", "Ursula"];
    let wildEnemy = wildEnemyArmy[Math.floor(Math.random() * wildEnemyArmy.length)];
    console.log(`${wildEnemy} is about to attack!`);
    let response = readline.question("Will you [r]un or [f]ight?");
    if (response === "r") {
        return run();
    } else if (response === "f") {
        return fight();
    }
    return wildEnemy;
}

// handles running away
function run() {
    let chances = Math.floor(Math.random() * 2) + 1;
    if (chances === 2) {
        return enemyAttack();
    } else {
        return walk();
    }
}

//handles fighting turns 
function fight() {
    while (!battle) {
        userAttack();
        if (enemyHP <= 0) {
            console.log("Wild Enemy is Dead. You're a murderer :(");
            prizeHandler();
        }
        enemyAttack();
        if (userHP <= 0) {
            console.log("You're dead. Sorry, there is no afterlife :(");
            // fight is terminated to end loop. 
        }
        battle = false;
    }
}

function attack(enemy, isFighting){
if( enemy.enemyHP <= 0){
console.log("Congrats you killed the " + wildEnemy + "!")
// enemies can drop an item and you can push it into player inventory using 
}
}

// handles user's attack and enemy's HP value
function userAttack() {
    let damage = Math.floor(Math.random() * 15);
    enemyHP - damage;
    console.log(`You have ${userHP} hit points left.`);
    console.log(`Your enemy has ${enemyHP} hit points left.`);
}

//handles enemy's attack and user's hp value
function enemyAttack() {
    let damage = Math.floor(Math.random() * 15);
    userHP - damage;
    console.log(`You have ${userHP} hit points left.`);
    console.log(`Your enemy has ${enemyHP} hit points left.`);
}




