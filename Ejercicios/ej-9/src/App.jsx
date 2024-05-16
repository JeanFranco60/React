import { useState, useEffect } from "react";
import "./App.css";
import Movies from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&sort_by=popularity.desc",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGEzZDhjOGZlMjRlNzlkMmJjN2IyZjYyMmRlMDU2MyIsInN1YiI6IjY2NDUzYmFhYTE3ZjJiYzVkNjJkNzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6hY6n2PKJhRMxLnv2n0Fp57fvRLTtX3bsEW_ipnANE",
          },
        }
      );
      const moviesObject = await response.json();
      setMovies(moviesObject.results);
    };

    getMovies();
  }, []);

  console.log(movies);
  return (
    <div className="container">
      <h1 className="text-">HackLife</h1>
      <div className="row">
        <Movies movies={movies} setMovies={setMovies} />
      </div>
    </div>
  );
}

export default App;
