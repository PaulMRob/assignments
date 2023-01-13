import { useState, useEffect } from 'react'
import axios from 'axios'
import ArtCard from './ArtCard'

export default function Home() {

    const [pieceImage, setPieceImage] = useState()

    const [artCard, setArtCard] = useState({
        image: "",
        author: "",
        credit: "",
        categories: [],
        img_id: ""
    })
    
    // Get Piece Info from API
    useEffect(() => {
        axios.get("https://api.artic.edu/api/v1/artworks/129884?fields=id,title,image_id,artist_title,category_titles,credit_line")
            .then(res => {
                setArtCard(prevArtCard => ({ 
                    ...prevArtCard,
                    author: res.data.data.artist_title,
                    credit: res.data.data.credit_line,
                    categories: res.data.data.category_titles,
                    img_id: res.data.data.image_id
                }))
            })
        axios.get(`https://www.artic.edu/iiif/2/${artCard.img_id}/full/843,/0/default.jpg`) 
            .then(res => {
                setArtCard(prevArtCard => ({
                    ...prevArtCard,
                    image: res
                }))
            })
    }, [])
    // Get Image from IIIF API
    

    // const displayPiece = pieceList.map(info => (
    //     <ArtCard />
    // )) 
    console.log(artCard)
    return(
        <div>
            <h1>Welcome to the Art Institute of Chicago!</h1>
            <input 
                type="text" 
                name="search-input"
                placeholder='Search' 
            />
            <button>Search</button>
            <ArtCard />
        </div>
    )
}