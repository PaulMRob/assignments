import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import AddMovieForm from "./components/AddMovieForm";

export default function App() {
  const { movies, setMovies } = useState([]);

  function getMovies() {
    axios
      .get("/movies")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function addMovie(newMovie) {
    axios
      .post("/movies", newMovie)
      .then((res) => {
        setMovies((prevMovies) => [...prevMovies, res.data]);
      })
      .catch((err) => console.log(err));
  }

  function deleteMovie(movieId) {
    axios
      .delete(`/movies/${movieId}`)
      .then((res) => {
        setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
      })
      .catch((err) => console.log(err));
  }

  function editMovie( updates, movieId)
    axiox.put(`/movies/${movieId}`, updates)
      .then(res => {
        setMovies(prevMovies => [prevMovies.map(movie => movie._id !== movieId ? movie : res.data)])
      })
      .catch(err => console.log(err))

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-container">
      <AddMovieForm 
        submit={addMovie} 
        btnText="Add Movie"/>
      {movies.map((movie) => (
        <Movie {...movie} key={movie.title} deleteMovie={deleteMovie} editMovie={editMovie}/>
      ))}
    </div>
  );
}
