import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import serviceData from './serviceData'

export default function ServiceDetails() {

const navigate = useNavigate()

const {serviceId} = useParams()

const foundService = serviceData.find(service => service._id === serviceId )

    return (
        <div>
            <h1>{foundService.name} Detail Page</h1>
            <h3>${foundService.price}</h3>
            <p>{foundService.description}</p>
            <button onClick={() => navigate('/services')}>Back to Services</button>
        </div>
    )
}