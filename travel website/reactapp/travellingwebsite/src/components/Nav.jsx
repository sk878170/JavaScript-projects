import React, { useState } from "react";
import "../static/index.css";
import { Link } from "react-router-dom";

const Nav = ({ homeRef, serviceRef, destinationRef, tripRef, clientRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <div className="nav__header">
        <div
          className="nav__menu__btn"
          id="menu-btn"
          onClick={toggleMenu} 
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>

      <ul className={`nav__links ${menuOpen ? "open" : ""}`} id="nav-links">
        <Link to="/">
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
        </Link>
        <li onClick={() => scrollToSection(serviceRef)}>Service</li>
        <li onClick={() => scrollToSection(destinationRef)}>Destination</li>
        <li onClick={() => scrollToSection(tripRef)}>Trip</li>
        <li onClick={() => scrollToSection(clientRef)}>Client</li>
      </ul>
    </nav>
  );
};

export default Nav;
