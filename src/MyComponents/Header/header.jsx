import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./header.css";
// const [activeLink, setActiveLink] = useState('home')

import React, { useEffect, useState } from "react";

const Header = () => {
  

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a class="navbar-brand" href="#">
          <img src="./logo.png" alt="logo" />
        </a>
        <div className="navItemsWrapper">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="#">
                  Our Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="socials">
              <a href="#">Call Us: +1 (514) 022-8419</a>
              <a href="#">Log In</a>
              <button className="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
