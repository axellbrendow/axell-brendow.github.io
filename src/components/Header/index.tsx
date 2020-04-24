import React, { useContext } from "react";
import styled from "styled-components";

import { SectionContext } from "contexts/SectionContext";

import { sectionsData } from "containers/Home";

import { widths } from "styles/mediaRules";

const StyledNav = styled.nav`
  text-transform: uppercase;
  justify-content: center;
  font-weight: bold;

  .navbar-collapse {
    flex-grow: unset;
  }

  li:not(:first-child) {
    margin-left: 0ch;
  }

  li {
    transition: all 1s;
    border-radius: 10px;
    padding: 0 10px;
  }

  li.active {
    background-color: var(--info);
  }

  ${widths.sm`
    font-size: 0.8em;

    li:not(:first-child) {
      margin-left: 2ch;
    }
  `}

  ${widths.md`
    font-size: inherit;
  `}
`;

interface HeaderLinkProps {
  name: string;
  link: string;
}

const HeaderLink = ({ link, name }: HeaderLinkProps) => {
  const { sectionLink } = useContext(SectionContext);

  return (
    <li
      key={name}
      className={`nav-item ${link === sectionLink ? "active" : ""}`}
    >
      <a className="nav-link" href={`#${link}`}>
        {name}
      </a>
    </li>
  );
};

const Header = () => {
  return (
    <StyledNav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse mt-2"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          {Object.values(sectionsData).map(HeaderLink)}
        </ul>
      </div>
    </StyledNav>
  );
};

export default Header;
