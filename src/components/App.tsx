import React from "react";
import { ThemeProvider } from "react-jss";

import { theme } from "../theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
    </ThemeProvider>
  );
};

export default App;
