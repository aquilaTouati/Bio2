import React from "react";
import "./Moviecard.css";

const Moviecard = (props) => {
  return (
    <div className="MovieCard">
      <img className="background" src={props.movie.picture} />
      <div>
        <h1 className="title inline">{props.movie.title} </h1>
        <span className="year">{props.movie.year} </span>
      </div>
      <span className="inline">{props.movie.genre}</span>
      <p>{props.movie.description} </p>
      <span>{props.movie.rating} </span>
    </div>
  );
};

export default Moviecard;
