
import React, { useState } from "react";
// import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const apiKey = '99eb9fd1';
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${input}`);
      const data = await response.json();
      console.log(response);
      console.log(data);
      setMovies(data.Search);
    } catch (error) {
      console.error('Error fetching movies:', error.message);
    }
  }
  return (
    <div>
        <p>Search Movie</p>
        <input type="text" onChange={(e)=> setInput(e.target.value)} />
        <button onClick={fetchMovies}>Search</button>
        <ul>
        {movies.map((movie) => (
            <li key={movie.imdbID}>
              <p>{movie.Title} ({movie.Year})</p>
              <img src={movie.Poster} alt="movie-image" />
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App;
