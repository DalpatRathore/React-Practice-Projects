import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo">
        <Link to="/">
          <h1>rpp-app</h1>
        </Link>
        <p>when the going gets tough, the tough get going</p>
      </div>
      <div className="header__linksContainer">
        <NavLink to="/" className="header__link">
          Home
        </NavLink>
        <NavLink to="/about" className="header__link">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
