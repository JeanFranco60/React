// App.jsx
import React from "react";
import Movie from "./components/Movie";

function App() {
  return (
    <div>
      <h1>Listado de Películas</h1>
      <div className="movie-list">
        <Movie
          name="Spider-man"
          year={2017}
          image="https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/femme-fatale-spider-man-homecoming-2-jessica-drew.jpg"
          score="bueno"
        />
        <Movie
          name="Batman"
          year={2005}
          image="https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png"
          score="regular"
        />
        <Movie
          name="Batman & Robin"
          year={1997}
          image="https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg"
        />
      </div>
    </div>
  );
}

export default App;
