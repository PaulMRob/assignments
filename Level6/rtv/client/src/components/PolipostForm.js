import React, {useState} from 'react'

const initInputs = {
  title: "",
  desctription: "",
  imgUrl: "",
};

const PolipostForm = (props) => {
  const [inputs, setInputs] = useState(initInputs)
  const {addPost} = props

  function handleChange(e) {
    const {name, value} = e.target
    setInputs((prevInputs)=> ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e){
    e.preventDefault()
    addPost(inputs)
    setInputs(initInputs)
  }

  const {title, description, imgUrl} = inputs 
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="title" />
      <input 
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="description" />
      <input 
        type="text"
        name="imgUrl"
        value={imgUrl}
        onChange={handleChange}
        placeholder="image url" />
      <button>Add Polipost</button>
    </form>
  )
}

export default PolipostForm