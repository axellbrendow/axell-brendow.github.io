import React, { createContext, useState } from "react";

export const SectionContext = createContext({
  sectionLink: "presentation",
  setSectionLink: (sectionLink: string) => {},
});

const SectionContextProvider: React.FC = ({ children }) => {
  const [sectionLink, setSectionLink] = useState("presentation");

  return (
    <SectionContext.Provider value={{ sectionLink, setSectionLink }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionContextProvider;
