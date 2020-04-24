import React from "react";

import { sectionsData } from "containers/Home";

import Section from "components/Section";
import TitleAndCodeDivider from "components/TitleAndCodeDivider";

const color = "purple";

const AboutMe: React.FC = () => {
  return (
    <Section
      id={sectionsData.aboutMe.link}
      backgroundColor="white"
      color={color}
      className="container"
      sectionLink={sectionsData.aboutMe.link}
    >
      <TitleAndCodeDivider title="About me" color={color} fontSize="1.5em" />
      <p className="mt-3">
        First, know that I love things that challenge me 🎯. I have knowledge in
        front-end, back-end and MVC frameworks. I work as a Full Stack and my
        biggest wish is to be able to learn more 📖, spend my energy on projects
        ⚡ and share experiences 🌎!
      </p>
      <p className="mt-3">
        I started programming in C at 12, since then, I have fallen in love with
        this activity 💕 and experienced other languages like C++, C#, Java,
        PHP, JavaScript, Python, Go and others.
      </p>
    </Section>
  );
};

export default AboutMe;
