import logo from "./logo.svg";
import "./App.css";
import Jobs from "./components/Job/Job";
import Bio from "./components/Bio/Bio";
import Header from "./components/Header/Header";
import Data from "./data.json";
import Banque from "./components/Banque/Banque";
import Moviecard from "./components/Moviecard/Moviecard";
import Filter from "./components/Filter/Filter";
import Component1 from "./components/Component1/Component1";
import Component2 from "./components/Component2/Component2";
import Component3 from "./components/Component3/Component3";
import react, { useState } from "react";
import Details from "./components/Details/Details";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// export default function App() {
//   const history=useHistory()
//   return (
//     <Router>
//        <Switch>
//       <Route path="/">
//         {/* page d'acceuil */}
//         <Component1 />
//         <button OnClick={()=>{
//           alert("You are directed");
//           history.push("/component3");
//         }}> click</button>

//       </Route>
//       <Route path="/component2" component={Component2} />
//       <Route path="/component3" />
//       <Link to="/">C1</Link>
//     </Router>
//     </Switch>
//   );
// }

function App() {
  const [movies, setMovie] = useState(Data);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Filter setMovie={setMovie} movies={Data} />
          {movies.map((movie) => (
            <Moviecard movie={movie} />
          ))}
        </Route>
        <Route exact path="/details/:id">
          <Details movieList={movies} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
