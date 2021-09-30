import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__tile">{title}</h3>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {" "}
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
