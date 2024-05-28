import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Rating from "./RatingStars";
import InfiniteScroll from "react-infinite-scroll-component";

function Movies({ movies, setPages, setRating }) {
  return (
    <>

      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPages((prevPage) => prevPage + 1)}
        hasMore={true}
        loader={
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
        endMessage={<p>No hay más películas para cargar</p>}
      >
        <div className="container">
        <Rating setRating={setRating} />
          <div className="row justify-content-center">
            {movies.map((film) => (
              <div
                className="movie_card col-12 col-sm-6 col-md-4 col-lg-3 "
                key={film.id}
              >
                <div className="info_section">
                  <div className="movie_header">
                  
                    <Link to={`${film.id}`}>
                      <img
                        className="locandina"
                        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                        alt={`Poster of ${film.title}`}
                      />
                    </Link>
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
      </InfiniteScroll>
    </>
  );
}

export default Movies;
