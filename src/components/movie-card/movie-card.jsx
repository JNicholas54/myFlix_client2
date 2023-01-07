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
      title: PropTypes.string.isRequired,
      story: PropTypes.string.isRequired,
      genre: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string
      }),
      director: PropTypes.shape({
        name: PropTypes.string,
        bio: PropTypes.string,
        dob: PropTypes.string
      }),
      ImagePath: PropTypes.string,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };