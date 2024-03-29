import { useState, useEffect } from "react";
import axios from "axios";
import Bounty from "./components/Bounty";
import AddBountyForm from "./components/AddBountyForm";

export default function App() {
  const [bounties, setBounties] = useState([]);

  function getMovies() {
    axios
      .get("/bounties")
      .then((res) => setBounties(res.data))
      .catch((err) => console.log(err));
  }

  function addBounty(newBounty) {
    axios
      .post("/bounties", newBounty)
      .then((res) => {
        setBounties((prevBounies) => [...prevBounies, res.data]);
      })
      .catch((err) => console.log(err));
  }

  function deleteBounty(bountyId) {
    axios
      .delete(`/bounties/${bountyId}`)
      .then((res) => {
        setBounties((prevBounties) =>
          prevBounties.filter((bounty) => bounty._id !== bountyId)
        );
      })
      .catch((err) => console.log(err));
  }

  function editBounty(updates, bountyId) {
    axios
      .put(`/bounties/${bountyId}`, updates)
      .then((res) => {
        setBounties((prevBounties) =>
          prevBounties.map((bounty) =>
            bounty._id !== bountyId ? bounty : res.data
          )
        );
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className="bounty-container">
      <AddBountyForm submit={addBounty} btnText="Add Bounty" />
      {bounties.map((bounty) => (
        <Bounty
          {...bounty}
          key={bounty.firstName}
          deleteBounty={deleteBounty}
          editBounty={editBounty}
        />
      ))}
    </div>
  );
}
