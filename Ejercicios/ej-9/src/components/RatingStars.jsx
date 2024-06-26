import React from "react";
import ReactStars from "react-rating-stars-component";

function RatingStars({ setRating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      isHalf={false}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
      classNames="rating-stars"
      aria-label="Rating"
    />
  );
}

export default RatingStars;
