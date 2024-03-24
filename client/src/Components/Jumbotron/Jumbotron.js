import React from "react";
const Jumbotron = ({ title }) => {
  return (
    <div className="jumbotron title-jumbotron bg-light">
      <h1 className="text-center">{title}</h1>
    </div>
  );
};

export default Jumbotron;
