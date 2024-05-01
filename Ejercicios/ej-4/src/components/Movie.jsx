// Movie.jsx
import React from 'react';
const Movie = ({ name, year, image, score }) => {
  return (
    <div className="movie">
      <h2>{name} ({year})</h2> 
      <img src={image} alt={name} className='movie-image'/>
      <p>Puntaje: {score}</p>
    </div>
  );
};

export default Movie;
