import React from 'react'
import { useNavigate } from 'react-router-dom'
import plumberData from './plumberData'


export default function About() {

    const navigate = useNavigate()

    const plumbers = plumberData.map(plumber => (
        <div className='plumber-bio' key={plumber._id}>
            <h3>{plumber.name}</h3>
            <p>( {plumber.experience} years of experience )</p>
            <img src={plumber.img} />
            <p>{plumber.description}</p>
        </div>
    ))
    
    return (
        <div className='about'>
            <h1>About Us</h1>
            <p>At Prescient Plumbing we understand that dealing with ANY kind of piping problem, whether kitchen, HVAC or bathroom, is untenable!!!! 
                That's why if you sign up for Prescient Plumbing's precognitive services, you'll never have to deal with another plumbing problem (presumably)
                ever again!!!! We pledge to prevent your pipes from pluggig prior impending perdicaments!   
            </p>
            <button onClick={() => navigate('/services')}>Check out Prescient Services!</button>
            <button onClick={() => navigate('/')}>Return Home</button>

            <div>
                <h1>Our Precog Plumbers:</h1>
                {plumbers}
            </div>
        </div>
    )
}