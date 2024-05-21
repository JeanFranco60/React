import React from "react";
import "../App.css";

function Movies({ movies }) {
  return (
    <div className="container">
      <div className="row">
        <div className=" ">

        
        {movies.map((film) => (
          <div className="movie_card col-12 col-md-6 col-lg-3 " key={film.id} id={film.id}>
            <div className="info_section">
              <div className="movie_header">
                <img
                  className="locandina"
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                />
                <div>
                  <h1>{film.title}</h1>
                  <h4>{film.release_date}</h4>
                  <span className="minutes">
                    original language ({film.original_language}){" "}
                  </span>
                  <div className="rating">{film.vote_average}</div>
                  <span className="rating">Votes: {film.vote_count}</span>
                </div>
              </div>
              <div className="movie_desc">
                <p className="text">{film.overview}</p>
              </div>
            </div>
            <div
              className="blur_back"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${film.backdrop_path})`,
              }}
            ></div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
