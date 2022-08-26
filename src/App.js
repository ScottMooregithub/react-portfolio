import React, { useState } from "react";
import Header from "../src/components/header";
import About from "../src/components/about";
import Contact from "../src/components/contact";
import Portfolio from "../src/components/portfolio";
import Resume from "../src/components/resume";
import Footer from "../src/components/footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("about");

  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <>
      <Helmet>
        <title>Scott Moore | {currentTab} </title>
      </Helmet>
      
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
      <main>{renderTab()}</main>
      <Footer></Footer>
    </>
  );
}

export default App;
