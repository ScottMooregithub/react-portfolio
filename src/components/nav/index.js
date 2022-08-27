import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { currentTab, handleTabChange } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <nav>
      <ul className="nav-ul">
        <li className="nav-li">
          <a href="#about" onClick={() => handleTabChange("About")}>
            ABOUT
          </a>
        </li>
        <li className="nav-li">
          <a href="#portfolio" onClick={() => handleTabChange("Portfolio")}>
            PORTFOLIO
          </a>
        </li>
        <li className="nav-li">
          <a href="#contact" onClick={() => handleTabChange("Contact")}>
            CONTACT
          </a>
        </li>
        <li className="nav-li">
          <a href="#resume" onClick={() => handleTabChange("Resume")}>
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
