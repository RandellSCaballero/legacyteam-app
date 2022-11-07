import React from "react";
import "../styles/NavbarStyles.css"
import logo from "../images/lst-logo.jpeg"

function Navbar() {
  return (
    <div id="container-header" className="container-header">
        <div className="container">
          <div className="logo-container">
            <p className="logo">Legacy Team</p>
            <img src={logo} className="logo-lst"/>
          </div>
            <nav>
                <a href="#">Ranking</a>
                <a href="#">Mercadería</a>
                <a href="#">Nuestras Redes</a>
            </nav>
        </div>
    </div>
  );
}

export default Navbar;