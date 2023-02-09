import { useState } from "react";

export default function AddMovieForm(props) {
  const initialInputs = { tile: props.title || "", genre: props.genre || "" };
  const [inputs, setInputs] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(inputs, props._id);
    setInputs(initialInputs);
    //implement conditional toggle here using props?
  }


  return (
    <form>
      <input
        type="text"
        name="title"
        value={inputs.title}
        onChange={hangleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="genre"
        value={inputs.genre}
        onChange={hangleChange}
        placeholder="Genre"
      />
      <button>{props.btnText}</button>
    </form>
  );
}
