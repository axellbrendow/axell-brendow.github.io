import React from "react";
import styled from "styled-components";

import { widths } from "styles/mediaRules";

export interface DividerProps {
  color?: string;
}

const Divider = styled.div<DividerProps>`
  width: 100px;
  height: 0.25rem;
  border-radius: 1rem;
  border-color: #2c3e50 !important;
  background-color: ${props => props.color || "inherit"};

  ${widths.sm2`
    width: 150px;
  `}

  ${widths.md`
    width: 200px;
  `}
`;

interface CodeDividerProps {
  fontSize?: string;
}

const CodeDividerStyle = styled.div<CodeDividerProps>`
  font-size: ${props => props.fontSize || "inherit"};
`;

const CodeDivider = ({ color, fontSize }: DividerProps & CodeDividerProps) => {
  return (
    <CodeDividerStyle
      className="d-flex justify-content-center align-items-center"
      fontSize={fontSize}
    >
      <Divider color={color} />
      <div className="ml-3">
        <i className="fa fa-code"></i>
      </div>
      <Divider className="ml-3" color={color} />
    </CodeDividerStyle>
  );
};

export default CodeDivider;
