import { useState } from "react";

export default function AddBountyForm(props) {
  const initialInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    bountyAmount: props.bountyAmount || 0,
    type: props.type || "",
    living: true,
  };

  const [inputs, setInputs] = useState(initialInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(inputs, props._id);
    setInputs(initialInputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={inputs.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={inputs.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="number"
        name="bountyAmount"
        value={inputs.bountyAmount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        value={inputs.type}
        onChange={handleChange}
      />
      <div className="living">
        <p>Living:</p>
        <input
          type="radio"
          name="living"
          value={inputs.living}
          onChange={handleChange}
        />
        <p>Dead:</p>
        <input
          type="radio"
          name="living"
          value={inputs.living}
          onChange={handleChange}
        />
      </div>
      <button>{props.btnText}</button>
    </form>
  );
}
