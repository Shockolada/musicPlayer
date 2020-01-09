import React from "react";
import Main from "./layouts/Main";
import { CssBaseline } from "@material-ui/core";
import { theme } from "./themes/mainTheme";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </MuiThemeProvider>
    </>
  );
}

export default App;
