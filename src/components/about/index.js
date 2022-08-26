import React from "react";
import profilepic from "../../assets/img/scott128.png"
function About() {
  return (
    <section id="about-me" className="sarahs">
      <div class="">
        <h1 id="about" className="about">
          About Me
        </h1>
      </div>
      <div className="">
        <div class="group-photo">
          
          <p className="aboutMe">
            My name is Scott Moore I am a 31 years old and go by he/him. I am
            an amatuer powerlifter and spend most of my free time either riding
            motorcycles with my friends Elliott and Terence or playing videogame
            with them. I have a BA in fire science and technology and used that
            degree as a volunteer firefighter for three years. Eventually I 
            realized firefighting was not my passion and so here I am! coding a
            portfolio using react. 
          </p>
          <div class="">
            <img src={profilepic}  />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
