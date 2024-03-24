import React from "react";

const ProjectView = () => {
  return <h1>test</h1>;
  return (
    <>
      <div className="jumbotron title-jumbotron bg-light">
        <h1 className="text-center">Parallax Website</h1>
        <p className="text-center rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
        </p>
      </div>

      <main className="bg-white">
        <div className="container project-section">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img className="img-fluid" src="images/projects/parallax.png" />
              <div className="project-meta row">
                <div className="col-md-6 user-inform">
                  <img src="images/users/avatar1.png" alt="" />
                  <a href="user-profile.html" className="profile-name">
                    Satham Ussain
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 project-info">
              <h3>Parallax Website</h3>
              <p>
                This is a parallax website using html, css, js. Almost all the
                content of the website will be look on the same single page.
                When we click the link from nav website scroll to related
                section of website. I don't know what content write about this
                project. so Instead of putting loream ipsum i just type my own
                content.
              </p>

              <div className="project-details">
                <h6>Tech Stack</h6>
                <ul className="project-stack">
                  <li>
                    <img src="images/icons/html.png" />{" "}
                  </li>
                  <li>
                    <img src="images/icons/css.png" />
                  </li>
                  <li>
                    <img src="images/icons/bootstrap.png" />
                  </li>
                </ul>
                <h6>Category</h6>
                <a href="javascript:void(0);" className="category-link">
                  CMS
                </a>{" "}
                <a href="javascript:void(0);" className="category-link">
                  Website
                </a>
                <h6>Resource Links</h6>
                <a
                  href="https://jolly-kalam-23776e.netlify.app/parallaxsite/"
                  className="source-link"
                >
                  {" "}
                  <i className="fa fa-globe"></i> Live Preview
                </a>
                <a
                  href="https://github.com/Satham-MJ/FirstWebsite"
                  className="source-link"
                >
                  {" "}
                  <i className="fa fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container p-4 p-md-5 border rounded-3 bg-light">
              <h5>Leave a Rating</h5>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Rating
                </label>
                <input
                  type="hidden"
                  id="selected_rating"
                  name="selected_rating"
                  value=""
                  required="required"
                />
                <h2 className="bold rating-header" style="">
                  <span className="selected-rating">0</span>
                  <small> / 5</small>
                </h2>
                <button
                  type="button"
                  className="btnrating btn btn-default btn-lg"
                  data-attr="1"
                  id="rating-star-1"
                >
                  <i className="fa fa-star" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  className="btnrating btn btn-default btn-lg"
                  data-attr="2"
                  id="rating-star-2"
                >
                  <i className="fa fa-star" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  className="btnrating btn btn-default btn-lg"
                  data-attr="3"
                  id="rating-star-3"
                >
                  <i className="fa fa-star" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  className="btnrating btn btn-default btn-lg"
                  data-attr="4"
                  id="rating-star-4"
                >
                  <i className="fa fa-star" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  className="btnrating btn btn-default btn-lg"
                  data-attr="5"
                  id="rating-star-5"
                >
                  <i className="fa fa-star" aria-hidden="true"></i>
                </button>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectView;
