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

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo_dark} alt="" className="logo" />
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
        <img src={search_incon_light} alt="" />
      </div>

      {/* logic for the connexion */}

      <Button type="button" class="btn btn-primary">
        <BiSolidLogInCircle size={24} />
      </Button>

      {/* dark mode */}

      <img src={toggle_light} alt="Logo" className="toggle-icon" />
    </div>
  );
};

export default Navbar;
