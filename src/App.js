import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import OneAvengerPage from "./components/OneAvengerPage";

function App() {
  return (
    <>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route exact path="/avengers" component={AvengersList} />
      <Route path="/avengers/:id" component={OneAvengerPage} />
    </>
  );
}

export default App;
