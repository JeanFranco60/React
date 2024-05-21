import { useState, useEffect } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Rating from "./components/RatingStars";

function App() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(1);

  useEffect(() => {
    const voteAverage = rating * 2 - 2;
    const getMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=true&page=1&sort_by=popularity.desc&vote_average.gte=${voteAverage}`,
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
  }, [rating]);
  console.log(movies);
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Rating setRating={setRating} />
    
          <Movies movies={movies} setMovies={setMovies} rating={rating} />
     
    </div>
  );
}

export default App;
