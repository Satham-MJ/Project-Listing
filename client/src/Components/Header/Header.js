import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/logo.png";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            <b>Newton</b> Listify
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fa fa-sign-in"></i> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <i className="fa fa-user"></i> Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
