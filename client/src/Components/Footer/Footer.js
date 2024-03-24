import React from "react";
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3">
            <p className="title">
              <img
                src={Logo}
                alt=""
                width="30"
                height="30"
                className="d-inline-block align-text-top"
              />
              <b>Newton</b> Listify
            </p>
            <p>
              Its a new platform to list Newton school student projects. We
              planned to make this as helpful project for newton school
              students.
            </p>
          </div>
          <div className="col-md-3 col-lg-3">
            <h6>Quick Links</h6>
            <nav className="nav flex-column">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="col-md-3 col-lg-3">
            <h6>Follow Us On</h6>
            <nav className="nav flex-column">
              <Link className="nav-link" to="/">
                <i className="fa fa-facebook-square"></i> Facebook
              </Link>
              <Link className="nav-link" to="/">
                <i className="fa fa-twitter-square"></i> Twitter
              </Link>
              <Link className="nav-link" to="/">
                <i className="fa fa-linkedin-square"></i> LinkedIn
              </Link>
            </nav>
          </div>
          <div className="col-md-3 col-lg-3">
            <h6>Contact Us</h6>
            <p>
              <i className="fa fa-envelope-o"></i> info@newtonlistify.com
            </p>
            <p>
              # 27, Random Street,
              <br />
              Random Building,
              <br />
              Bangalore.
            </p>
          </div>
        </div>
        <p className="text-center">
          © 2021 Newton Listify. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
