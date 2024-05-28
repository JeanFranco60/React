import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGEzZDhjOGZlMjRlNzlkMmJjN2IyZjYyMmRlMDU2MyIsInN1YiI6IjY2NDUzYmFhYTE3ZjJiYzVkNjJkNzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6hY6n2PKJhRMxLnv2n0Fp57fvRLTtX3bsEW_ipnANE",
            },
          }
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: movie ? `url(https://image.tmdb.org/t/p/original${movie.poster_path})` : '',
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {movie ? (
        <div className="text-center text-white">
          <h2 className="mb-4">{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ) : (
        <p className="text-white">Cargando...</p>
      )}
    </div>
  );
}

export default MovieDetails;
