import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// Material UI stuff
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import primary from "@material-ui/core/colors/green";
import secondary from "@material-ui/core/colors/indigo";
// Custom CSS
import "./App.css";
// Custom Components
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";

// Create Theme
const theme = createMuiTheme({
  palette: {
    primary,
    secondary
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Header />
          <Routes />
          <Footer />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
