import data from "../data/pokemons";

import "./App.css";
import React from "react";
import Pokemons from "./components/Pokemons";

function App() {
  return (
    <div className="pokemonCardContainer">
      <h1>Listado de Pokemones</h1>
      <div className="pokemonCard x">
          {data.map ((data)=>(
            <Pokemons
            key={data.id}
            name={data.name}
            type={data.type}
            image={data.image}/>
          ))}
      </div>
    </div>
  );
}

export default App;