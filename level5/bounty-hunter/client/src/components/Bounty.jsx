import { useState } from "react";
import AddBountyForm from "./AddBountyForm";

export default function Bounty(props) {
  const initialInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    bountyAmount: props.bountyAmount || 0,
    type: props.type || "",
    living: true,
  };

  const { firstName, lastName, type, living, bountyAmount, _id } = props;

  const [editInputs, setEditInputs] = useState(initialInputs);
  const [editing, setEditing] = useState(false);

  return (
    <div className="bounty">
      {!editing ? (
        <>
          <h1>
            Name: {firstName} {lastName}
          </h1>
          <p>{type}</p>
          <button
            className="delete-btn"
            onClick={() => props.deleteBounty(_id)}
          >
            Delete
          </button>
          <button className="edit-btn" onClick={() => setEditing(true)}>
            Edit
          </button>
        </>
      ) : (
        <>
          <h1>Add bounty</h1>
          <AddBountyForm
            firstName={firstName}
            lastName={lastName}
            bountyAmount={bountyAmount}
            type={type}
            living={living}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editBounty}
          />
          <button onClick={() => setEditing(false)}>Close</button>
        </>
      )}
    </div>
  );
}
