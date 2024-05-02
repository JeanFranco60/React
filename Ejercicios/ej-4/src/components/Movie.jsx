// Movie.jsx
import React from 'react';
const Movie = ({ name, year, image, score }) => {
  return (
    <div>
      <h2>{name} ({year})</h2> 
      <p> {score}</p>
      <img src={image} alt={name}/>
    </div>
  );
};

export default Movie;
