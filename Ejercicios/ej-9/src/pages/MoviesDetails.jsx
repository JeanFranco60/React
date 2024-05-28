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
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGEzZDhjOGZlMjRlNzlkMmJjN2IyZjYyMmRlMDU2MyIsInN1YiI6IjY2NDUzYmFhYTE3ZjJiYzVkNjJkNzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6hY6n2PKJhRMxLnv2n0Fp57fvRLTtX3bsEW_ipnANE"
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
    <div className="card" style={{ width: "18rem" }}>
      {movie?.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="card-img-top"
          alt={movie.title}
        />
      ) : (
        <p>No hay póster disponible</p>
      )}
      <div className="card-body">
        {movie ? (
          <>
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
