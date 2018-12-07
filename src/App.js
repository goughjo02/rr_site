import React, { Component, Fragment } from "react";
// Material UI stuff
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import primary from "@material-ui/core/colors/green";
import secondary from "@material-ui/core/colors/indigo";
// Custom CSS
import "./App.css";
// Custom Components
import Router from "./Router";
import Footer from "./Footer";


// Create Theme
const theme = createMuiTheme({
  palette: {
    primary,
    secondary
  },
  typography: {
    useNextVariants: true,
  }
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Router />
          <Footer />
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
