const express = require("express");
const bountiesRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const bounties = [
  {
    firstName: "Depa",
    lastName: "Billaba",
    living: false,
    bountyAmount: 40,
    type: "jedi",
    _id: uuidv4(),
  },
  {
    firstName: "Eno",
    lastName: "Cordova",
    living: false,
    bountyAmount: 40,
    type: "jedi",
    _id: uuidv4(),
  },
  {
    firstName: "Cin",
    lastName: "Drallig",
    living: false,
    bountyAmount: 40,
    type: "jedi",
    _id: uuidv4(),
  },
  {
    firstName: "Kit",
    lastName: "Fisto",
    living: false,
    bountyAmount: 40,
    type: "jedi",
    _id: uuidv4(),
  },
  {
    firstName: "Artel",
    lastName: "Darc",
    living: false,
    bountyAmount: 100,
    type: "sith",
    _id: uuidv4(),
  },
];

bountiesRouter.get("/", (req, res) => {
  res.send(bounties);
});

bountiesRouter.post("/", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuidv4();
  bounties.push(newBounty);
  res.send(newBounty);
});

bountiesRouter.delete("/:bountyId", (req, res) => {
  const bountyId = req.body.bountyId;
  const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId);
  bounties.splice(bountyIndex, 1);
  res.send(`You have successfully off'd your bounty!`);
});

bountiesRouter.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId);
  const updatedBounty = Object.assign(bounties[bountyIndex], req.body);
  res.send(updatedBounty);
});

module.exports = bountiesRouter;
