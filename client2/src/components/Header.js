// src/components/Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle navigation
  // For the toggle navbar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          {/* Hamburger icon for mobile */}
          <button className="nav-toggle" onClick={toggleNav}>
            <span className="hamburger"></span>
          </button>
          <ul className={`nav-links ${isNavOpen ? "nav-open" : ""}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-nav-item" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/report"
                className={({ isActive }) =>
                  isActive ? "active-nav-item" : undefined
                }
              >
                Enrolment Report 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/report2"
                className={({ isActive }) =>
                  isActive ? "active-nav-item" : undefined
                }
              >
                Enrolment Report 2
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
