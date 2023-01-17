import React from 'react'

export default function ArtCard({props}) {

    return (
        <div className='card-container'>
            <img 
                src={props.image}
                className='art-image' 
            />
            <title>This is the title</title>
            <h3>Author Goes here</h3>
            <p>description of piece goes here</p>
            <button>Next Piece</button>
            <button>Catalogue</button>
        </div>
    )
}