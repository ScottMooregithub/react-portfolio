import React from "react";
import Nav from "../nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="header">
          <div>
            <h1 className="name">Scott Moore</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;