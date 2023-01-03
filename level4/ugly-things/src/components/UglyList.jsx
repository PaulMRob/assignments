import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { UglyContext } from './ContextProvider'
import UglyCard from './UglyCard'

export default function UglyList(props) {

    const {uglyThings, deleteBtn, updateUglyThing, getNewList} = useContext(UglyContext)

    useEffect(() => {
        getNewList()
    }, [])

    const savedUglyThings = uglyThings?.map(info => (
        <UglyCard
            info={info}
            key={info._id}
            delete={deleteBtn}
            edit={updateUglyThing}
        />
    ))

    return (
        <div className='ugly-list'>
            
            {savedUglyThings}
          
        </div>
    )
}