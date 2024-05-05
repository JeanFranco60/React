import React from "react";
import looneyTunes from "looney-tunes";
import LooneyCard from "../components/LooneyCard/";

const LooneyTunesChars = () => {
  const allLooneyTunes = looneyTunes.all();
  console.log(allLooneyTunes);
  return (
    <div className="gap">  
      <div className="d-flex flex-wrap justify-content-center">
        {allLooneyTunes.map((looney) => (
          <LooneyCard key={looney.name} looney={looney} />
        ))}
      </div>
    </div>
  );
};

export default LooneyTunesChars;