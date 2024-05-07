import React from "react";
import "./App.css";
import LooneyTunesChars from "./components/Chars/";
import RandomLooney from "./components/RandomLooney/";

function App() {
  return (
    <div className="bg-black">
      <h1
        className="text-center text-white" >
        Chars Looney Tunes
        {/* <RandomLooney /> */}
      </h1>
      <LooneyTunesChars />
    </div>
  );
}

export default App;
