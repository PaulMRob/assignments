import {useState, useContext} from 'react'
import { UglyContext } from './ContextProvider'

export default function UglyCard(props) {

    const [isEditMode, setIsEditMode] = useState(false)

    const [editUglyThing, setEditUglyThing] = useState({
        title: props.info?.title,
        description: props.info?.description,
        imgUrl: props.info?.imgUrl
    })

    function editHandler(e) {
        setIsEditMode(true)
        setEditUglyThing(prevUglyThing => ({
            ...prevUglyThing,
            [e.target.name]: e.target.value
        }))
    }

    function saveHandler() {
        setIsEditMode(false)
        props.edit(props.info._id, editUglyThing)
    }

    return (
        <div className='card'>
            <h3 className='ugly-title'>{props.info.title}</h3>
            <p className='ugly-description'>{props.info.description}</p>
            <img className='ugly-img' src={props.info.imgUrl} />
            {isEditMode &&
                <input
                    value={editUglyThing.title || ''}
                    type="text"
                    name='title'
                    onChange={editHandler}
                />
            }

            {isEditMode &&
                <input
                    value={editUglyThing.description || ''}
                    type="text"
                    name="description"
                    onChange={editHandler}
                />
            }

            {isEditMode &&
                <input
                    value={editUglyThing.imgUrl || ''}
                    type="text"
                    name="imgUrl"
                    onChange={editHandler}
                />
            }

            {!isEditMode && <button className="card-btn" onClick={editHandler}>Edit Ugly Thing</button>}
            {isEditMode && <button className="card-btn" onClick={saveHandler}>Save</button>}
            <button className="card-btn" onClick={() => props.delete(props.info._id)}>Delete From List</button>
        
        </div>
    )
}