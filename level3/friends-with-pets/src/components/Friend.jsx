import React from "react"
import Pet from "./Pet"

export default function Friend(props) {
    const pets = props.pets.map(pet => {
        return (
            <Pet
                key = { pet.id } 
                {...pet}
            /> 
        )
    })
    return (
        <div className="friend">
            <div className="name-age">
                <h1>{props.name} </h1>
                <p className="vl">|</p>
                <h2> {props.age}</h2>
            </div>
            <h3 className="pets">PETS</h3>
            <div className="pet-breed">
                {pets}
            </div>
            <hr/>
        </div>
    )
}