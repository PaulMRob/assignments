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

    gotHit(status) {
        if (this.hasStar === true) {
            console.log("The Star Protected You!")
            this.hasStar = false
        }
        if (this.status === "Powered Up") {
            this.status = "Big"
        }
        if (this.tatus === "Big") {
            this.status = "small"
        }
        if (this.status === "small") {
            this.status = "dead"
            console.log("You Dead")
            process.exit()
        }
    }

    gotPowerup(status) {
        if (status === "small") {
            status = "Big"
        }
        if (status === "Big") {
            status = "Powered Up"
        }
        if (status === "Powered Up") {
            console.log("You found a star!")
            hasStar = true
        }
    }

    addCoin(totalCoins) {
        this.totalCoins ++
    }

    print() {
    console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Total Coins: ${this.totalCoins}
        `)
    }
}

// Random Number Within Range [0-2]
let randomRange = () => {
    let x = Math.floor(Math.random() * 3);
    
    if (x === 0) {
        currentPlayer.gotHit()
        console.log("gotHit")
    }
    
    if (x === 1) {
        currentPlayer.gotPowerup()
        console.log("gotPowerup")
    }
    
    if (x === 2) {
        currentPlayer.addCoin()
        console.log("addCoin")
    } 
    
    currentPlayer.print()
}

var choosePlayer = readline.question("Welcome! Please choose your player: Mario or Luigi. Once chosen, the game will begin.")

var currentPlayer = new Player()

currentPlayer.setName(choosePlayer)

setInterval(randomRange, 3000)

setTimeout(() =>{process.exit()}, 15000)