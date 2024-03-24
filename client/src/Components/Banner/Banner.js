import React from "react";

const Banner = ({ title, banner, link }) => {
  return (
    <div class="carousel-item active">
      <img src={banner} class="img-fluid d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block text-black">
        <h5>{title}</h5>
        <p>
          {" "}
          <a href={link} class="btn btn-primary">
            Read More
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
