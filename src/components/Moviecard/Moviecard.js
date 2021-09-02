import React from "react";
import "./Moviecard.css";
import { useHistory } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

const Moviecard = (props) => {
  const history = useHistory();
  // const { url, path } = useRouteWatch();
  return (
    <div
      onClick={() => {
        history.push(`/details/${props.movie.id}`);
      }}
      className="MovieCard"
    >
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
