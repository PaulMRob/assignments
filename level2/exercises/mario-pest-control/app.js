let prices = []

const totalForm = document.total
totalForm.addEventListener("submit", (event) => {
    event.preventDefault()

    //goomba price
    const goombaPrice = 66
    const goombaPriceTotal = goombaPrice * goombas.quantity.value
    prices.push(goombaPriceTotal.toFixed(2))
    
    
    //bob-ombs price
    const bobPrice = 44
    const bobPriceTotal = bobPrice * bobombs.quantity.value
    prices.push(bobPriceTotal.toFixed(2))

    //cheep-cheep price
    const cheepPrice = 55
    const cheepPriceTotal = cheepPrice * cheeps.quantity.value
    prices.push(cheepPriceTotal.toFixed(2))

    let sum = 0
    for (let i = 0; i < prices.length; i++) {
        sum += parseInt(prices[i])
    }
    console.log(sum) 
    const h1 = document.createElement("h1")
    h1.textContent = sum
    document.getElementById("total").append(h1)
})
