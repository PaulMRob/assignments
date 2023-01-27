const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require("uuid");

//fake data
const movies = [
  { title: "alien", genre: "horror", _id: uuidv4() },
  { title: "annihilation", genre: "science ficiton", _id: uuidv4() },
  { title: "mad max fury road", genre: "action", _id: uuidv4() },
  { title: "moonlight", genre: "drama", _id: uuidv4() },
  { title: "dune", genre: "science fiction", _id: uuidv4() },
];

// Routes
movieRouter.route("/")
  .get((req, res) => {
    res.send(movies);
  })
  .post((req, res) => {
    const newMovie = req.body;
    newMovie._id = uuidv4();
    movies.push(newMovie);
    res.send(`${newMovie.title} was added to database!`);
  });

module.exports = movieRouter