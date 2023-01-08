import React from "react";
import PropTypes from "prop-types";

import "./movie-card.scss";

//This is the moviecard function component
export const MovieCard = ({movie, onMovieClick }) => {
    return <div onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  };

  //Here is where we define all the props constraints for the moviecard
  MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Story: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string,
        Description: PropTypes.string
      }),
      Director: PropTypes.shape({
        Name: PropTypes.string,
        Bio: PropTypes.string,
        dob: PropTypes.string
      }),
      ImgURL: PropTypes.string,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };