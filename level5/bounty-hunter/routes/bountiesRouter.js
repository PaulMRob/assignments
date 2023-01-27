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
  res.send(`${newBounty.firstName} ${newBounty.lastName} was successfully added to database!`);
});

module.exports = bountiesRouter;
