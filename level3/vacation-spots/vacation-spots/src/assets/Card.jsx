import React from "react"

export default function Card(props) {
    let price = "$"
    if (props.price > 500 && props.price < 1000) {
        price = "$$"
    } else if (props.price > 1000) {
        price = "$$$"
    }
    
    return (

        <div className="card" style={{backgroundColor: props.color}}>
            
            <span className="place">{props.place}</span>
            
            <span className="price">{price}</span>
            
            <span className="time-to-go">{props.timeToGo}</span>
            
        </div>
    )
}