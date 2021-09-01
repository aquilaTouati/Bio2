import { useState } from "react";
const FilterSearch = (props) => {
  const [filter, setFilter] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const exp = new RegExp(filter, "i");
        props.setMovie(
          props.movies.filter((movie) => {
            if (filter == "") return true;
            if (exp.test(movie.title)) {
              return true;
            }
            return false;
          })
        );
      }}
    >
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />

      <button> Filter </button>
    </form>
  );
};

export default FilterSearch;
