import React from "react";
import myResume from "../../assets/img/resume.jpeg";

function Resume() {
  return (
    <div>
      <section>
        <a href={myResume}>
          <p>download</p>
        </a>
      </section>
      <section>
        <p>Technologies</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>APIs</li>
          <li>TailWind</li>
          <li>Jest</li>
          <li>Mysql</li>
          <li>sequelize</li>
          <li>Node.js</li>
          <li>Bootstrap</li>
          <li>GIT</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
