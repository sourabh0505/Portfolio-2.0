import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="projectsDiv" id="/projects">
      <div className="projectsHeading">
        <p>PROJECTS</p>
        <p>EXPLORE NOW</p>
      </div>

      <div className="projectsContent">
        <div className="projectContainer1">
          <div className="project1Info">
            <p>ShoeBazaar</p>
            <p>
              The ShoeBazaar Retail Online Store, a frontend project crafted
              with ReactJS, HTML, and CSS, delivers an immersive shopping
              experience tailored for shoe enthusiasts. With integrated features
              like a responsive design, cart functionality, and dynamic search
              capabilities, it provides a seamless platform for exploring and
              purchasing footwear products.
            </p>
            <button className="showProject">
              <a target="_blank" href="https://shoebazaar1.netlify.app/">
                Check Here
              </a>
            </button>
          </div>
        </div>

        <div className="projectContainer1">
          <div className="project1Info">
            <p>RecipeBook</p>
            <p>
              The Recipe Book Website, developed in ReactJS with Redux
              integration, offers a diverse selection of recipes with a
              dedicated favorite section. It features multiple page layouts,
              including individual recipe info pages and curated book
              recommendations, providing users with an immersive culinary
              experience.
            </p>
            <button className="showProject">
              <a target="_blank" href="https://recipebook111.netlify.app/">
                Check Here
              </a>
            </button>
          </div>
        </div>

        <div className="projectContainer1">
          <div className="project1Info">
            <p>Live Weather</p>
            <p>
              The Responsive Weather Application, developed with ReactJS and
              utilizing the OpenWeather API, offers users real-time weather
              updates with key metrics like temperature, wind speed, and
              humidity. Its responsive design ensures optimal viewing across
              devices, enabling users to stay informed about weather conditions
              on-the-go with ease and convenience.
            </p>
            <button className="showProject">
              <a target="_blank" href="https://findweather1.netlify.app/">
                Check Here
              </a>
            </button>
          </div>
        </div>

        <div className="projectContainer1">
          <div className="project1Info">
            <p>My Portfolio</p>
            <p>
              My Portfolio Website, built with ReactJS, employs React Icons for
              UI enhancements and React-Scroll for smooth navigation. It
              presents information about me and showcases my projects, offering
              visitors an immersive glimpse into my professional journey.
            </p>
            <button className="showProject">
              <a target="_blank" href="/">
                Check Here
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
