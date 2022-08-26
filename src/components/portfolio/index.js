import React from "react";
import sphereImage from "../../assets/img/sphere.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="">
        <div className="flex-row">
          <h2 className="">Work</h2>
        </div>

        <div className="">
          <div className="">
            <div className="">
              <a href="https://github.com/Lemming97/Project_3">
                {" "}
                <img
                  src={sphereImage}
                  className=""
                  style={{ width: "50%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>The Sorcerer's Sphere</h4>
              <p>
                A Carnival style application that lets users get fortunes, lucky
                numbers, affirmations, and enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;