import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
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
  return (
    <Router>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <NavigationBar />
        <MainPage />
      </ThemeProvider>
    </Router>
  );
}

export default App;
