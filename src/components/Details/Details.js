import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const Details = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const object = props.movieList.find((movie) => movie.id == id);
  console.log(object);
  return (
    <div>
      <h1> Movie : {object.title} </h1>

      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Back{" "}
      </button>
    </div>
  );
};

export default Details;
