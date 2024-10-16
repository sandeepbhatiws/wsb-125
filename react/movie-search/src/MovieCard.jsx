import React from 'react'

export default function MovieCard({data}) {
  return (
    <div class="box">
        <img src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`} alt="" />
        <div class="overlay">
            <div class="title"> 
                <h2> {data.original_title} </h2>
                <span> {data.vote_average} </span>
            </div>
            <h3>Overview:</h3>
            <p> 
            {data.overview}
            </p>
        </div>
    </div>
  )
}
