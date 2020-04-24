import React from "react";

import { sectionsData } from "containers/Home";

import { contacts, Contact } from "./data";

import Section from "components/Section";
import TitleAndCodeDivider from "components/TitleAndCodeDivider";

const color = "white";

const ContactContainer = ({
  classNameLi,
  iconType,
  iconName,
  anchorHref,
  anchorChildren,
}: Contact) => (
  <li key={classNameLi} className={`${classNameLi} col-sm-6 col-md`}>
    <a href={anchorHref} target="_blank" rel="noopener">
      <i className={`${iconType} fa-${iconName}`} /> {anchorChildren}
    </a>
  </li>
);

const Contacts = () => {
  return (
    <Section
      id={sectionsData.contact.link}
      backgroundColor="var(--dark)"
      color={color}
      fontSize="1.1em"
      sectionLink={sectionsData.contact.link}
    >
      <TitleAndCodeDivider title="Contact" color={color} fontSize="1.5em" />
      <ul className="container-fluid row mt-4 text-center pr-0 pl-0">
        {contacts.map(ContactContainer)}
      </ul>
    </Section>
  );
};

export default Contacts;
