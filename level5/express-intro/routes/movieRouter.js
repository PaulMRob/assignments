const express = require("express");
const movieRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

//fake data
const movies = [
  { title: "alien", genre: "horror", _id: uuidv4() },
  { title: "annihilation", genre: "science-fiction", _id: uuidv4() },
  { title: "mad max fury road", genre: "action", _id: uuidv4() },
  { title: "moonlight", genre: "drama", _id: uuidv4() },
  { title: "dune", genre: "science-fiction", _id: uuidv4() },
];

// Routes
// get all
movieRouter
  .route("/")
  .get((req, res) => {
    res.send(movies);
  })
  .post((req, res) => {
    const newMovie = req.body;
    newMovie._id = uuidv4();
    movies.push(newMovie);
    res.send(`${newMovie.title} was added to database!`);
  });

// get one
movieRouter.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const foundMovie = movies.find((movie) => movie._id === movieId);
  res.send(foundMovie);
});

// get by genre
movieRouter.get("/search/genre", (req, res) => {
  const genre = req.query.genre;
  const filteredMovies = movies.filter((movie) => movie.genre === genre);
  res.send(filteredMovies)
});

module.exports = movieRouter;
