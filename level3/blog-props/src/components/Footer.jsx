import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

export default function Footer() {
   
    return (
        <div className="footer">
            
            <div className="footer-icons">
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faCoffee} />       
            </div>
            <p>Copyright © Your Website 2022</p>
        </div>
    )
}