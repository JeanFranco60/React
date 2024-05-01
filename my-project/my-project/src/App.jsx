import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Description from "./components/Description";
import Persona from "./components/Persona"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Welcome name="lpm madre, al fin pude" />

      <div>
        <Title title="Hola" />
        <Subtitle subtitle="Como estas" />
        <Description nombre="Jean" />
      </div>
      <div>
        <Persona nombre="Kevin" edad={18} />
       
      </div>
    </div>
  );
}

export default App;
