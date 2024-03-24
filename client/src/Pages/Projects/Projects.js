import React from "react";
import ProjectItem from "../../Components/ProjectItem/ProjectItem";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";

const Projects = () => {
  return (
    <>
      <Jumbotron title="Projects" />
      <main className="bg-white">
        <div className="container project-section">
          <div className="row">
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
