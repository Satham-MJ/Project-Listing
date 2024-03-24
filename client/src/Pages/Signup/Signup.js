import React from "react";
import LoginImg from "../../Assets/Images/login.png";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <img src={LoginImg} alt="" className="img-fluid" />
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <h5 className="text-center mb-3">Register your account</h5>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Full Name"
              />
              <label for="floatingInput">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign Up
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              <span>Already have an account? </span>
              <Link className="register-link" to="/login">
                Login
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
