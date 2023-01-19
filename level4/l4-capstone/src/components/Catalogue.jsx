import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Catalogue() {
    const navigate = useNavigate()
    
    const [artWorks, setArtWorks] = useState([])

    const imgUrl = "https://www.artic.edu/iiif/2"
    const imgSpec = "/full/843,/0/default.jpg"

    //API call to populate artWorks array
    useEffect(() => {
        axios.get("https://api.artic.edu/api/v1/artworks?limit=12")
            .then(res => {
                setArtWorks(res)
                artWorks.map((i) => {
                    return <div>
                        <img src={`${imgUrl}/${data.data.data[i].image_id}/${imgSpec}`} />
                    </div>
                })
            })
    }, [])
   
    
    console.log(artWorks)

    return (
        <div>
            <h1>Catalogue Page</h1>
           
            <button onClick={() => navigate("/")}>Home</button>
            
            <button>Next Page</button>
        </div>
    )
}