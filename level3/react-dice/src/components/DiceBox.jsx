import React from "react"
import Dice from "./Dice"

export default function DiceBox(props) {
    const [diceArray, setDiceArray] = React.useState([1,2,3,4,5])

    function rolltheDice() {
        setDiceArray(prevDiceArray => {
            let newNumbersArray = prevDiceArray.map(number => 1 + Math.floor(Math.random() * 6))
            return newNumbersArray
        }) 
    }
    
    const dice = diceArray.map(number => <Dice number={number} />)
    
    return (
        <div className="dice-box">
            {dice}
            <button onClick={rolltheDice}>ROLL!</button>
        </div>
    )
}