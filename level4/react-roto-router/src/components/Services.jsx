import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import serviceData from './serviceData'
 
export default function Services() {

    const navigate = useNavigate()

    const services = serviceData.map(service => (
        <h4 key={service._id} >
            <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}
        </h4>
    ))

    return (
        <div>
            <h1>Services page</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ipsum dolor sit amet consectetur adipiscing. Ac tortor dignissim convallis aenean. Erat imperdiet sed euismod nisi porta lorem mollis. 
                Aliquam sem fringilla ut morbi. Aliquet bibendum enim facilisis gravida neque convallis. Libero justo laoreet sit amet cursus. 
                Enim ut tellus elementum sagittis vitae et leo. Ut pharetra sit amet aliquam id diam maecenas. Integer eget aliquet nibh praesent tristique magna sit amet purus. 
                Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Sit amet justo donec enim diam vulputate ut pharetra sit. 
                Nisl purus in mollis nunc sed id semper risus. Tellus elementum sagittis vitae et. Mauris pellentesque pulvinar pellentesque habitant. 
                Enim nulla aliquet porttitor lacus luctus accumsan tortor. Condimentum id venenatis a condimentum vitae sapien pellentesque.</p>

            <button onClick={() => navigate('/')}>Return Home</button>

            <div>
                <h2>Our Services:</h2>
                {services}
            </div>
        </div>
    )
}