import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavLink exact to = "/">
      Home
    </NavLink>
    <NavLink to = "/movies">movies
    </NavLink>
    <NavLink to = "/directors">directors
    </NavLink>
    <NavLink to ="/actors">Actors</NavLink>
  </div>;
}

export default NavBar;
