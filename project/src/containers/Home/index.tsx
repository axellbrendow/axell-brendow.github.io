import React from "react";

import Header from "components/Header";
import Presentation from "./Presentation";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Portfolio from "./Portfolio";

export const sectionsData = {
  presentation: {
    name: "Presentation",
    link: "presentation",
  },
  aboutMe: {
    name: "About me",
    link: "about-me",
  },
  portfolio: {
    name: "Portfolio",
    link: "portfolio",
  },
  contact: {
    name: "Contact",
    link: "contact",
  },
};

const Home = () => {
  return (
    <>
      <Header />
      <Presentation />
      <AboutMe />
      <Portfolio />
      <Contacts />
    </>
  );
};

export default Home;
