import React from "react";
import "../App.css";
import Rating from "./RatingStars";

import InfiniteScroll from "react-infinite-scroll-component";

function Movies({ movies, setPages, setRating }) {
  return (
    <>
      <Rating setRating={setRating} />

      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPages((prevPage) => prevPage + 1)}
        hasMore={true}
        loader={
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        }
        endMessage={<p>No hay más películas para cargar</p>}
      ></InfiniteScroll>
      <div className="container">
        <div className="row">
          {movies.map((film) => (
            <div
              className="movie_card col-lg-3 col-md-4 col-sm-6 col-12"
              key={film.id}
            >
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
                      Idioma original: ({film.original_language})
                    </span>
                    <div className="rating">{film.vote_average}</div>
                    <span className="rating">Votos: {film.vote_count}</span>
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
    </>
  );
}

export default Movies;
