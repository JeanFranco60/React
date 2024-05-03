// Pokemons.js
import React from "react";

function Pokemons({ name, type, image }) {
  return (
    
    <div className="pokemonCard">
      <div className="sizeCard">
        <h2>{name}</h2>
      <img src={image} alt={name} />
        <p>type:{type}</p>
      </div>
    </div>
  );
}

export default Pokemons;
