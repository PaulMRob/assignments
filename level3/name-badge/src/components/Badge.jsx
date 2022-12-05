import React from "react"

export default function Badge(props){

    return(
        <div className="badge--container">
            <div className="badge--header">
                <h2>Badge:</h2>
            </div>
            <p>Name: {props.data.firstName} {props.data.lastName}</p>
            <p>Place of birth: {props.data.birthPlace}</p>
            <p>Email: {props.data.email}</p>
            <p>Phone: {props.data.phone}</p>
            <p>Favorite Food: {props.data.favoriteFood}</p>
            <p>About you: {props.data.about}</p>
            <div>
                <p></p>
            </div>
        </div>
    )
}