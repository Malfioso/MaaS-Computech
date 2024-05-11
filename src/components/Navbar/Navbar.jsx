import React from "react";

import { Button } from "react-bootstrap";

import "./Navbar.css";

import { BiSolidLogInCircle } from "react-icons/bi";

// all the images used in the navbar localy
import day from "../../assets/navbar/day.png";
import night from "../../assets/navbar/night.png";
import logo_dark from "../../assets/navbar/logo-black.png";
import logo_light from "../../assets/navbar/logo-white.png";
import search_incon_light from "../../assets/navbar/search-w.png";
import search_incon_dark from "../../assets/navbar/search-b.png";
import toggle_light from "../../assets/navbar/night.png";
import toggle_dark from "../../assets/navbar/day.png";
import login from "../../assets/navbar/login-icon.png";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    return theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
      </ul>

      <div className="src-box">
        <input type="text" placeholder="Search..." />
        <img
          src={theme == "light" ? search_incon_light : search_incon_dark}
          alt=""
        />
      </div>

      {/* logic for the connexion */}

      <Button type="button" className="btn btn-primary mr-1">
        <BiSolidLogInCircle size={24} />
      </Button>

      {/* dark mode */}

      <img
        src={theme == "light" ? toggle_light : toggle_dark}
        alt="Logo"
        className="toggle-icon"
        onClick={() => {
          toggleTheme();
        }}
      />
    </div>
  );
};

export default Navbar;
