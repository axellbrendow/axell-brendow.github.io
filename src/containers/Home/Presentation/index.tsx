import React from "react";

import { sectionsData } from "containers/Home";

import Section from "components/Section";
import TitleAndCodeDivider from "components/TitleAndCodeDivider";
import ReactLogoWithText from "components/ReactLogoWithText";

import MyPhoto from "assets/axell.png";

const color = "white";

const Presentation: React.FC = () => {
  return (
    <Section
      id={sectionsData.presentation.link}
      backgroundColor="purple"
      fontSize="1.4em"
      color={color}
      padding="100px 20px 40px"
      sectionLink={sectionsData.presentation.link}
    >
      <img src={MyPhoto} className="rounded-circle" alt="me" height="150px" />
      <TitleAndCodeDivider title="Full Stack Developer" color={color} />
      <p className="mt-3 text-center">React - Node.JS - React Native</p>
      <ReactLogoWithText />
    </Section>
  );
};

export default Presentation;
