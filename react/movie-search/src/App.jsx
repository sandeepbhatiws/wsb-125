import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './MovieCard'
import axios from 'axios'

function App() {

  const [movies, setMovies] = useState([]);
  const [apiURL, setApiurl] = useState('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1');
  const [name,setName] = useState('');

  useEffect(() => {
    axios.get(apiURL)
    .then((success) => {
      setMovies(success.data.results);
    }).catch();
  },[name]);

  const searchMovie = (event) => {
    var searchName = event.target.value;
    if(searchName.length == 0){
      setApiurl('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
    } else {
      setApiurl(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${event.target.value}`);
    }

    setName(event.target.value);
  }

  return (
    <>
      <div class="main">
        <div class="row">
            <input type="search" onChange={searchMovie} id="search" value={name} autofocus autocomplete="off" placeholder="Search here..." />
        </div>
        <div class="row" id="movie-box">
          {
            movies.map((v,i) => {
              return(
                <MovieCard data={v}/>
              )
            })
          }
            
        </div>
      </div>
    </>
  )
}

export default App
