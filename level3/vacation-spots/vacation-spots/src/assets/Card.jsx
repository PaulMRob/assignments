import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <span>{props.place}</span>
            <span>{props.price}</span>
            <span>{props.timeToGo}</span>
        </div>
    )
}