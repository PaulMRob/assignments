import React from 'react'

export default function ArtCard({props}) {
    console.log(props)
    return (
        <div className='card-container'>
            <img 
                src={props.image}
                className='art-image' 
            />
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.credit}</p>
        </div>
    )
}