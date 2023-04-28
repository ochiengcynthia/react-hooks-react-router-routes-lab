import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
