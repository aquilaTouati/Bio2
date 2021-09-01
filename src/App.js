import logo from "./logo.svg";
import "./App.css";
import Jobs from "./components/Job/Job";
import Bio from "./components/Bio/Bio";
import Header from "./components/Header/Header";
import Data from "./data.json";
import Banque from "./components/Banque/Banque";
import Moviecard from "./components/Moviecard/Moviecard";
import Filter from "./components/Filter/Filter";
import react, { useState } from "react";

function App() {
  const [movies, setMovie] = useState(Data);
  return (
    <div className="App">
      {/* <Header />
      {Data.map((value) => (
        <Jobs key={value.id} job={value} />
      ))}
      <Banque /> */}
      {/* <Bio /> */}

      <Filter setMovie={setMovie} movies={Data} />
      {movies.map((movie) => (
        <Moviecard movie={movie} />
      ))}

      {/* <Data /> */}
    </div>
  );
}

export default App;
