const readline = require("readline-sync")

class Player {
    constructor(name, totalCoins = 0, status = "small", hasStar = false){
        this.name = name
        this.status = status
        this.totalCoins = totalCoins
        this.hasStar = hasStar
    }

    setName(namePicked){
        if (namePicked === "Luigi") {
            this.name = "Luigi"
        } else if (namePicked === "Mario") {
            this.name = "Mario"
        }    
    }

    gotHit() {
        if (this.hasStar === true) {
            console.log("The Star Protected You! But it was destroyed in the process :(")
            this.hasStar = false
        } else if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "small"
        } else {
            this.status = "dead"
            console.log("You were weak. Now you're dead.")
            process.exit()
        }
    }

    gotPowerup() {
        if (this.status === "Powered Up") {
            console.log("You found a star!")
            this.hasStar = true
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else {
            this.status = "Big"
        } 
    }

    addCoin() {
        this.totalCoins ++
    }

    print() {
        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Total Coins: ${this.totalCoins}
        `)
        if (this.hasStar) console.log("You currently have a star")
    }
}

// Random Number Within Range [0-2]
let randomRange = () => {
    let x = Math.floor(Math.random() * 3);
    
    if (x === 2) {
        console.log("You were hit!")
        currentPlayer.gotHit()
    }
    
    if (x === 0) {
        console.log("Level Up!")
        currentPlayer.gotPowerup()
    }
    
    if (x === 1) {
        console.log("You found a coin!")
        currentPlayer.addCoin()
    } 
    
    currentPlayer.print()
}

var choosePlayer = readline.question("Welcome! Please choose your player: Mario or Luigi. Once chosen, the game will begin.")

var currentPlayer = new Player()

currentPlayer.setName(choosePlayer)

setInterval(randomRange, 3000)

setTimeout(() =>{process.exit()}, 60000)