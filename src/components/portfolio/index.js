import React from "react";
import sphereImage from "../../assets/img/sphere.png";

function Portfolio() {
  return (
    <div>
      <section id="" className="sphere-section">
        <div className="flex-row">
          <h2 className="Work">Work</h2>
        </div>

          <div className="group-sphere">
              
            <div className="sphere-text">
              <div className="sphere-title">The Sorcerer's Sphere</div>
              <p>
                Believe in the unknown? Take a trip to The Sorcerer's Sphere!
                A fully immersive where you can ask the sphere for guidance,
                pay a trip to magic mark for life advice, get you lucky lotto
                numbers, and if you're feeling generous donate a dollar.
              </p>
            </div>
            <a href="https://github.com/Lemming97/Project_3">
                {" "}
                <img 
                  src={sphereImage}
                  className="sphere-pic"
                  alt=""
                />
              </a>
          </div>
      </section>
    </div>
  );
}

export default Portfolio;