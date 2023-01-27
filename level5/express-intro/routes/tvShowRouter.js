const express = require("express");
const tvShowRouter = express.Router();
const { v4: uuidv4 } = require("uuid");


//fake data
const tvShows = [
  { title: "hannibal", genre: "horror", _id: uuidv4() },
  { title: "devs", genre: "science ficiton", _id: uuidv4() },
  { title: "game of thrones", genre: "fantasy", _id: uuidv4() },
  { title: "killing eve", genre: "drama", _id: uuidv4() },
  { title: "the last of us", genre: "horror", _id: uuidv4() },
];

// Routes
tvShowRouter
  .route("/")
  .get((req, res) => {
    res.send(tvShows);
  })
  .post((req, res) => {
    const newShow = req.body;
    newShow._id = uuidv4();
    tvShows.push(newShow);
    res.send(`${newShow.title} was added to database!`);
  });
module.exports = tvShowRouter