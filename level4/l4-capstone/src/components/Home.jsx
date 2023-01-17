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
        img_id: "",
        config: ""
    })

    // Get Info from API
    useEffect(() => {
        const img_spec = "/full/843,/0/default.jpg"
        axios.get("https://api.artic.edu/api/v1/artworks/129884?fields=id,title,image_id,artist_title,category_titles,credit_line,config")
            .then(res => {

                setArtCard(prevArtCard => {
                    return {
                        ...prevArtCard,
                        image: `${res.data.config.iiif_url}/${res.data.data.image_id}${img_spec}`,
                        author: res.data.data.artist_title,
                        credit: res.data.data.credit_line,
                        categories: res.data.data.category_titles,
                        img_id: res.data.data.image_id,
                        config: res.data.config.iiif_url
                    }
                })
                console.log("art card", artCard)

                console.log("config", artCard.config)
                console.log("img_id", artCard.img_id)
            })
    }, [])


    return (
        <div>
            <h1>Welcome to the Art Institute of Chicago!</h1>
            <input
                type="text"
                name="search-input"
                placeholder='Search'
            />
            <button>Search</button>
            {/* <img src={artCard.image} alt="" /> */}
            <ArtCard props={artCard} />
        </div>
    )
}