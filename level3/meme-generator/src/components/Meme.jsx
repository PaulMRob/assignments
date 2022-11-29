import React from "react"
import memeData from "../memeData.jsx"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    function getMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <div className="form">
            <input 
                type="text" 
                className="form--input" 
                placeholder="Top text"
            />
            <input 
                type="text" 
                className="form--input" 
                placeholder="Bottom text"
            />
            <button
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
            <img 
                src={meme.randomImage} 
                className="meme--image"
            />
        </div>
    )
}