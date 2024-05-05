import React, { useState } from "react";
import looneyTunes from "looney-tunes";
import LooneyCard from "../components/LooneyCard/";
import chars from "./Chars/";

function RandomLooney() {
  const [randomLooneyTune, setRandomLooneyTune] = useState(null);

  const generateRandomLooneyTune = () => {
    const randomLooney = looneyTunes.random();
    setRandomLooneyTune(randomLooney);

    chars.push(randomLooney);
  };

  return (
    <div className="m-5">
      <button
        className="btn btn-outline-light"
        onClick={generateRandomLooneyTune}
      >
        Random Looney
      </button>
      {randomLooneyTune && <LooneyCard looney={randomLooneyTune} />}
    </div>
  );
}

export default RandomLooney;
