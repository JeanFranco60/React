import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Movies from "../components/Movies";


function Home() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(1);
  const [page, setPages] = useState(1);

  useEffect(() => {
    const voteAverage = rating * 2 - 2;
    const getMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=true&page=${page}&sort_by=popularity.desc&vote_average.gte=${voteAverage}`,
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

      setMovies((preMovies) => {
        if (page > 1) {
          return [...preMovies, ...moviesObject.results];
        } else {
          return moviesObject.results;
        }
      });
    };

    getMovies();
  }, [ page]);

  return (
    <>
   
      <Navbar />
      <Movies
        movies={movies}
        setMovies={setMovies}
        rating={rating}
        setRating={setRating}
        setPages={setPages}

      />
    </>
  );
}

export default Home;
