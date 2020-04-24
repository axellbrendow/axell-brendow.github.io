import React from "react";
import styled from "styled-components";

import ReactLogo from "../ReactLogo";

import { ellipseHeight } from "../ReactLogo/styles";

const ReactLogoContainerStyle = styled.div`
  > p {
    margin-left: calc(${ellipseHeight} + 1ch);
  }
`;

const ReactLogoWithText = ({ text = "Made in React :D" }) => (
  <ReactLogoContainerStyle>
    <a href="https://pt-br.reactjs.org/" target="_blank">
      <ReactLogo />
    </a>
    <p>{text}</p>
  </ReactLogoContainerStyle>
);

export default ReactLogoWithText;
