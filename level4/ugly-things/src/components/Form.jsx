import React, { useContext } from 'react'
import { UglyContext } from './ContextProvider'

export default function Form(props) {

    const {formSubmit, handleChange, getNewList} = useContext(UglyContext)
    
    return (
        <div className='form'>
            <input 
                type="text" 
                placeholder='Title'
                name="title"
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder='Description'
                name="description"
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder='Img URL'
                name="imgUrl"
                onChange={handleChange}
            />
            <button className='form-button' onClick={formSubmit}>Submit</button>
        </div>
    )
}