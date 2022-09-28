const readline = require("readline-sync");
let isAlive = true;


const enemyArmy = ["GREG", "SHELBY", "STEVE", "URSULA", "KEVIN"];
const booty = ["The Black Scroll of Futility", "The Black Scroll of Ecstasy", "The Black Scroll of Brutality", "The Black Scroll of Shattered Virtues", "The Black Scroll of Havoc"];
const scrollLore = [
    "The Black Scroll of Futility will confound the minds of your enemies",
    "The Black Scroll of Ecstasy will capture the hearts of your captors so that you may control them.",
    "The Black Scroll of Brutality will give you bear-like strength in battle",
    "The Black Scroll of Shattered Virtues will cut off your enemies from the favor of their gods!",
    "The Black Scroll of Havoc will plunge the world into unending chaos."
];

//random number generator!
function getRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Game Starts!
const name = readline.question("Greetings aspiring Human. Today your prooving begins. You may now surrender your NAME.");
console.clear();

function startGame() {
    console.log(`Greetings ${name}. My name is Morpheus and I am here to prepare you for the road ahead.`);
    console.log(`You will pass throuh many perrils. There are many who would do you harm.`);
    console.log(`But if you can collect all five of the black scrolls and bind Daemon Debby who will surely come for them...`);
    console.log(`Then you will win the day.` );
    console.log(`Your prize will be a magical kitten who never grows up and squeaks like a pika when you squeeze it hard enough.`)
    console.log(`But who am i kidding? You won't survive ten minutes out there in the MAZE ;))))))))))))))`);
};

function Player() {
    this.playerName = name;
    this.hp = 50;
    this.inventory = [];
}

function Enemy(enemyName, enemyHP, booty) {
    this.enemyName = enemyName;
    this.enemyHP = enemyHP;
    this.booty = booty;
}

let activePlayer = new Player();

function attack(activeEnemy, isFighting) {

    if (activeEnemy.enemyHP <= 0) {
        console.log("Your enemy is Dead. You're a murderer :(");
        activePlayer.hp += 5;
        activePlayer.inventory.push(activeEnemy.booty);
        console.log("... but at least you can have their stuff now :)");
        isFighting = !isFighting
    }

    if (activeEnemy.enemyHP > 0) {
        console.log(`${activeEnemy.enemyName} now has ${activeEnemy.enemyHP} health :P`);
        console.log("enemy hp:" + activeEnemy.enemyHP);
    }

    if (activePlayer.hp > 0) {
        activePlayer.hp -= getRandomNum(20);
        console.log(`You're a figther i guess. But you now have ${activePlayer.hp} health :/`);
    }

    if (activePlayer.hp <= 0) {
        console.log(`You're dead ${activePlayer.playerName}. Sorry, there is no afterlife :(`);
        isAlive = !isAlive;
        process.exit();
    }
    return isFighting;
}

// handles encounter with wild enemy
function enemyEncounter() {
    const enemyName = enemyArmy[getRandomNum(enemyArmy.length)];
    const enemyBooty = booty[getRandomNum(booty.length)];
    let activeEnemy = new Enemy(enemyName, 10, enemyBooty);
    console.log(`${activeEnemy.enemyName} is about to attack :O`);
    let isFighting = true;
    // responseToAttack = ["fight", "run"]; //switch below to keyIn like you're using in walk()

    while (isFighting) {
        let fightOrRun = readline.keyIn(`will you fight or will you run? :} "r" = run, "f" = fight     `);
        if (fightOrRun === "f") {
            activeEnemy.enemyHP -= getRandomNum(10);
            isFighting = attack(activeEnemy, isFighting);
            console.log("enemy hp: " + activeEnemy.enemyHP);
            console.log("player HP: " + activePlayer.hp);
        }

        else if (fightOrRun === "r") {
            console.log("Running is not a cowardly act. But a futile one :P");
            const chancesOfEscape = Math.random();
            if (chancesOfEscape <= 0.5) {
                console.log("Looks like you managed to escape... for now ;)");
                return
            }
            else if (chancesOfEscape <= 1) {
                console.log(`You're dead ${activePlayer.playerName}. Sorry, there is no afterlife :(`);
                console.log("GAME OVER");
                process.exit();
            }
        }
    }
}

function walk() {
    console.log(`*POP* 
    We have removed your eyes. Now you must walk the maze in darkness! :P`);
    
    let keyInOption = readline.keyIn('Why not take a walk? ("w" = walk) You may also "q" = quit, or "p" = view profile    ');

    if (keyInOption === 'p') {
        console.log(activePlayer);
    }

    else if (keyInOption === 'q') {
        console.log("I see... You're just another quitter. :[");
        process.exit();
    }

    else if (keyInOption === 'w') {
        console.log("You're walking");
        let evilChaos = getRandomNum(3);
        if (evilChaos === 2) {
            return enemyEncounter();
        }
        else if (evilChaos !== 2) {
        let lore = getRandomNum(scrollLore.length);
            console.log(`There are many things you should know about the Black Scrolls...
                        I've heard ${lore} 
                        But why waste my breath on one such as you?
                        Shall we continue walking?`);
            return walk();
        }
    }
}

function victory() {
    //if activePlayer get's all five scrolls (i.e. defeats all 5 enemies) the they win the game!

}
startGame();
while (isAlive) {
    walk();
}

//you can make a victory function that has text saying you win and also runs a process.exit()

