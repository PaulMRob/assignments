import React, { useState } from "react";

const initInputs = {
  booktitle: "",
  quotation: "",
  pagenumber: 0,
  author: "",
};

const BookpostForm = (props) => {
  const [inputs, setInputs] = useState(initInputs);
  const { addBookpost } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addBookpost(inputs);
    setInputs(initInputs);
  }

  const { booktitle, quotation, pagenumber, author } = inputs;
  return (
    <form className="bookpost-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="booktitle"
        value={booktitle}
        onChange={handleChange}
        placeholder="Book Title"
      />
      <input
        type="text"
        name="author"
        value={author}
        onChange={handleChange}
        placeholder="e.g. Toni Morrison"
      />
      <input
        type="number"
        name="pagenumber"
        value={pagenumber}
        onChange={handleChange}
        placeholder="123"
      />
      <input
        type="text"
        name="quotation"
        value={quotation}
        onChange={handleChange}
        placeholder="quotation"
      />
      <button>Submit</button>
    </form>
  );
};

export default BookpostForm;
