import React, {useState} from 'react'
import axios from 'axios'
import UglyList from './UglyList'

const UglyContext = React.createContext()

function UglyContextProvider(props) {
    
    //state
    const [uglyThing, setUglyThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })
    
    const [uglyThings, setUglyThings] = useState([]) 


    //FUNCTIOS:

    //(1) function that resets state of ugly thing based on changes made to FORM 
    const handleChange = (e) => {
        const {name, value} = e.target
        setUglyThing(prevUglyThing => ({
            ...prevUglyThing,
            [name]: value
        }))
    }

    //(2) function that adds ugly thing to array list of ugly things
    function addUglyThing() {
        setUglyThings(prevUglyThings => {
            return [...prevUglyThings, uglyThing]
        })
    }

    //(3) function that posts new ugly thing to the API
    const formSubmit = (e) => {
        e.preventDefault()
        addUglyThing()
        axios.post("https://api.vschool.io/paulrobertson/thing", uglyThing)
            .then(res => console.log(res.data))  
    }

    //(4) delete an ugly thing
    const deleteBtn = (id) => {
        axios.delete(`https://api.vschool.io/paulrobertson/thing/${id}`)
            .then(res => {
                const newState = uglyThings.filter(item => {
                    return item._id !== id
                })
                setUglyThings(newState)
            })
    }

    //(5) update state array of ugly things
    function updateUglyThing(id, editedField) {
        setUglyThing(prevUglyThing => editedField)
        axios.put(`https://api.vschool.io/paulrobertson/thing/${id}`, editedField)
            .then(res => {
                const newState = uglyThings.map(item => {
                    if(item._id === id) {
                        return res.data
                    } else {
                        return item
                    }
                })
                setUglyThings(newState)
            })
    }
    
    //(6) get request to API to dipslay ugly things 
    function getNewList() {
        axios.get("https://api.vschool.io/paulrobertson/thing")
            .then(res => {
                setUglyThings(res.data)
            })    
    }

    return (
        <UglyContext.Provider value={{
            uglyThing: uglyThing,
            formSubmit: formSubmit,
            handleChange: handleChange,
            getNewList: getNewList,
            uglyThings: uglyThings,
            updateUglyThing: updateUglyThing,
            deleteBtn: deleteBtn,
            UglyList: UglyList,
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}

