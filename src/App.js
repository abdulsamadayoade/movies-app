import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d990fa169986ab4aead024258ad53db4&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d990fa169986ab4aead024258ad53db4&query='

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });

      setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <header>
        <a href="/">Movies App</a>
        <form onSubmit={handleOnSubmit}>
          <input type="text" className="search" placeholder="Search" value={searchTerm} onChange={handleOnChange}/>
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;