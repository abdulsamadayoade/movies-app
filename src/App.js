import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d990fa169986ab4aead024258ad53db4&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d990fa169986ab4aead024258ad53db4&query='

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
  }, []);

  console.log(movies)

  return (
    <>
      <header>
        <a href="/">Movies App</a>
        <input type="text" className="search" placeholder="Search" />
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;