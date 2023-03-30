import React, { useState } from "react";

const initInputs = {
  booktitle: "",
  quotation: "",
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

  const { booktitle, quotation } = inputs;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="booktitle"
        value={booktitle}
        onChange={handleChange}
        placeholder="Book Title"
      />
      <input
        type="text"
        name="quotation"
        value={quotation}
        onChange={handleChange}
        placeholder="quotation"
      />
      <button>Add Bookpost</button>
    </form>
  );
};

export default BookpostForm;
