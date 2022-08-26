import React from "react";
import { FaInstagram } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

function Footer() {
  return (
    <footer>
      <h2>Made by Scott Moore©</h2>
      <p>
        <ul>
          <a href="https://github.com/ScottMooregithub">
            <li className="">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.instagram.com/simple_scottie/">
            <li className="">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;