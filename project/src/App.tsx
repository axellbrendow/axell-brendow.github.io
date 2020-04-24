import React from "react";

import Home from "containers/Home";

import GlobalStyles from "styles/global";
import SectionContextProvider from "contexts/SectionContext";

const App = () => {
  return (
    <SectionContextProvider>
      <GlobalStyles />
      <Home />
    </SectionContextProvider>
  );
};

export default App;
