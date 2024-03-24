import React from "react";
import Project1 from "../../Assets/Images/project-1.png";
import Project2 from "../../Assets/Images/project-2.png";
import ProjectItem from "../../Components/ProjectItem/ProjectItem";
import Callback from "../../Components/Callback/Callback";
import TopCreator from "../../Components/TopCreator/TopCreator";
import Banner from "../../Components/Banner/Banner";
const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <Banner
            title="First Slide"
            banner={Project1}
            link="/project/first"
            active={true}
          />
          <Banner
            title="First Slide"
            banner={Project2}
            link="/project/first"
            active=""
          />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <main class="bg-white">
        <div class="container project-section">
          <h3 class="text-center">Project of the Week</h3>
          <div class="row">
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </div>
        </div>
      </main>

      <Callback />
      <TopCreator />
    </>
  );
};

export default Home;
