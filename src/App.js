import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Main from "./pages/Main";
import SwitchTheme from "./components/SwitchTheme";

import * as themes from "./styles/themes";
import ThemeContext from "./styles/themes/context";

function App() {
  const [theme, setTheme] = useState({ theme: themes.dark });

  function toggleTheme() {
    setTheme({
      theme: theme.theme === themes.light ? themes.dark : themes.light
    });
  }

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <SwitchTheme toggle={() => toggleTheme} />
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme.theme}>
              <Main />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
