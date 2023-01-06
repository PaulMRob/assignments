import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    
    const navigate = useNavigate()

    return (
        <div className='home-page'>
            <h1>Welcome!</h1>
            <h2>Prescient Plumbing Services LLC</h2>
            <p>345 Yummy Cat Way </p>
            <p>Billville, SC 34492</p>

            <button onClick={() => navigate('/services')}>Schedule a Precognitive Service Today!</button>
        </div>
    )
}