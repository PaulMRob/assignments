import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img
                src={`../images/${props.imageUrl}`}
                className="card-image"
            />
            <div className="card-info">
                <img src="../images/pin.png" className="card-pin" />
                <span>{props.location} </span>
                <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
            <hr />
        </div>
    )
}