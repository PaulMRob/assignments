const express = require("express");
const thingsRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const things = [
  {
    name: "banana",
    type: "food",
    price: 200,
    _id: uuidv4(),
  },
  {
    name: "pants",
    type: "clothing",
    price: 2500,
    _id: uuidv4(),
  },
  {
    name: "basket ball",
    type: "toy",
    price: 1000,
    _id: uuidv4(),
  },
  {
    name: "rockem sockem robots",
    type: "toy",
    price: 1500,
    _id: uuidv4(),
  },
  {
    name: "shirt",
    type: "clothing",
    price: 800,
    _id: uuidv4(),
  },
  {
    name: "soup",
    type: "food",
    price: 300,
    _id: uuidv4(),
  },
  {
    name: "flour",
    type: "food",
    price: 100,
    _id: uuidv4(),
  },
];

    // query by id
thingsRouter.get("/:thingId", (req, res) => {
    const thingId = req.params.movieId;
    const foundThing = things.find(thing => thing._id === thingId)
    res.send(foundThing)
})

    // query by type
thingsRouter.get("/type", (req, res) => {
  const type = req.query.type
  const filteredThings = things.filter(thing => thing.type === type)
  res.send(filteredThings)
});

thingsRouter.get("/type", (req, res) => {
    console.log(req.query)
})

module.exports = thingsRouter;
