import React, { useRef, HTMLProps, useContext, useEffect } from "react";
import styled from "styled-components";

import useScroll from "helpers/useScroll";

import { SectionContext } from "contexts/SectionContext";

interface SectionStyleProps {
  backgroundColor: string;
  color?: string;
  fontSize?: string;
  padding?: string;
}

const SectionStyle = styled.section<SectionStyleProps>`
  background-color: ${props => props.backgroundColor};
  font-size: ${props => props.fontSize || "inherit"};
  color: ${props => props.color || "inherit"};
  padding: ${props => props.padding || "40px 20px"};
`;

interface SectionProps {
  sectionLink: string;
}

const Section: React.FC<SectionProps & SectionStyleProps & HTMLProps<any>> = ({
  id,
  sectionLink,
  backgroundColor,
  color,
  fontSize,
  padding,
  children,
  className,
}) => {
  const ref = useRef<HTMLElement>(null);
  const { setSectionLink } = useContext(SectionContext);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (ref?.current) {
      const { offsetTop, scrollHeight } = ref.current;
      const top =
        offsetTop - (ref.current.matches("section:last-child") ? 370 : 150);

      if (scrollY >= top && scrollY <= top + scrollHeight) {
        setSectionLink(sectionLink);
      }
    }
  }, [ref, scrollY]);

  return (
    <SectionStyle
      id={id}
      ref={ref}
      className={`container-fluid d-flex justify-content-center align-items-center flex-column ${className}`}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      padding={padding}
    >
      {children}
    </SectionStyle>
  );
};

export default Section;
