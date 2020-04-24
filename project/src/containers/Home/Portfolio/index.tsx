import React from "react";
import styled from "styled-components";

import { sectionsData } from "containers/Home";

import Section from "components/Section";
import TitleAndCodeDivider from "components/TitleAndCodeDivider";

import { images } from "./data";

const ImageContainer = styled.a`
  img {
    max-height: 80vh;
    max-width: 100%;
  }
`;

const Image = ({ src, alt, link }: Record<string, string>) => (
  <ImageContainer href={link} key={src} target="_blank" rel="noopener">
    <img src={src} alt={alt} title={alt} className="rounded" />
  </ImageContainer>
);

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  text-align: center;
`;

const color = "white";

const Portfolio: React.FC = () => {
  return (
    <Section
      id={sectionsData.portfolio.link}
      backgroundColor="purple"
      fontSize="1.5em"
      color={color}
      padding="100px 20px 40px"
      sectionLink={sectionsData.portfolio.link}
    >
      <TitleAndCodeDivider title="Portfolio" color={color} />
      <ImagesContainer className="mt-5">{images.map(Image)}</ImagesContainer>
    </Section>
  );
};

export default Portfolio;
