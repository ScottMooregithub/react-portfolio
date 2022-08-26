import React from "react";
import sphereImage from "../../assets/img/sphere.png";
import beerImage from "../../assets/img/beer.png";
import travelImage from "../../assets/img/travel.png";
import weatherImage from "../../assets/img/weather.png";
import pizzaImage from "../../assets/img/pizza.png";
import runImage from "../../assets/img/run.png";
import { ProjectCard } from "./project-card";

function Portfolio() {
  return (
    <div>
      <section className="sphere-section">
        <div>
          <h2 className="Work">Work</h2>
        </div>
        <ProjectCard
          title="The Sphere"
          description="Believe in the unknown? Take a trip to The Sorcerer's Sphere! A
        fully immersive where you can ask the sphere for guidance, pay a
        trip to magic mark for life advice, get you lucky lotto numbers,
        and if you're feeling generous donate a dollar."
          imageUrl={sphereImage}
          link="https://github.com/Lemming97/Project_3"
        />
        <ProjectCard
          title="Beer Pages"
          description="Search by city for local breweries! Type in a city to find the best breweries to your future destinations along with the weather so that you can make and informed decision on whether an outdoor or indoor brewery would better host your needs."
          imageUrl={beerImage}
          link="https://github.com/El-Mariachi760/beer-pages"
        />
        <ProjectCard
          title="Travel Advice Exress"
          description="Project 2: Scott, Katya, Michael and Farah - Travel Review Site with login / logout dashboard, ability to post reviews with photo, title, location, review text with travel categories. After sign up or registration, users can post, edit, delete and / or comment on other posts."
          imageUrl={travelImage}
          link="https://github.com/katyajuliet/travel-advice-express"
        />
        <ProjectCard
          title="Weather Dashboard"
          description="A weather Dashboard that uses OpenWeather API along with bootstrap to create a page that displays the current forecast as well as the next 5 day forecast of the searched Location."
          imageUrl={weatherImage}
          link="https://github.com/ScottMooregithub/weather-dashboard"
        />
        <ProjectCard
          title="Pizza Hunt"
          description="MAKE A PIZZA!"
          imageUrl={pizzaImage}
          link="https://github.com/ScottMooregithub/pizza-hunt"
        />
        <ProjectCard
          title="Run Buddy"
          description="Interactive Training application"
          imageUrl={runImage}
          link="https://github.com/ScottMooregithub/run-buddy"
        />
      </section>
    </div>
  );
}

export default Portfolio;
