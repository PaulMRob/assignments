import React from "react"

export default function Pet(props) {
    return (
        <div className="pet">
            <h4>{props.name}</h4>
            <p className="vl">|</p>
            <p>{props.breed}</p>
        </div>
    )
}