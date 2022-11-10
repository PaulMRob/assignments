import React from "react"

export default function Info() {
    return (
        <div className="info-container">
            <img className="portrait" src="./images/EARL4106.jpg" />
            <h1 className="name" >Paul Robertson</h1>
            <h4 className="job" >Full Stack Developer</h4>
            <p className="website" >paulrobertson.website</p>
            <div className="btns">
                <button className="email-btn" ><img src="./images/Mail.png" />Email</button>
                <button className="linkedin-btn"><img src="./images/Vector.png" />LinkedIn</button>
            </div>
        </div>
    )
}