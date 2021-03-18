import React, { useEffect, useState } from "react";
import styled, {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import MainPage from "./components/MainPage/MainPage";

import { LightTheme, DarkTheme } from "./themes";

const GlobalStyle = createGlobalStyle`

  html {
    /* font sizes */
    --fontSizeSmall: .8rem;
    --fontSizeMedium: 1rem;
    --fontSizeLarge: 1.2rem;
    --fontSizeXXL: 1.5rem;

    /* misc */
    --borderRadius: 5px;
    --Shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
  }

  *,
  *:before, 
  *:after {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

*:focus {
  outline: none;
}

a, 
a:active, 
a:visited {
  text-decoration: none;
  color: inherit;
}
  
  body {
  background-color: ${({ theme }) => theme.mainBackground};
  font-family: 'Montserrat', sans-serif;
  }

`;

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(LightTheme);

  // toggle based on whether a toggle button is checked or not
  const toggleThemes = (isDarkTheme: boolean): void => {
    isDarkTheme ? setTheme(DarkTheme) : setTheme(LightTheme);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavigationBar toggleThemes={toggleThemes} />
        <MainPage />
      </ThemeProvider>
    </Router>
  );
}

export default App;
