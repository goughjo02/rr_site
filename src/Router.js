import React, { Component, Fragment } from "react";
// React Router stuff
import { BrowserRouter, Route, Link } from "react-router-dom";
// Material UI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
// Material Icons
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SchoolIcon from "@material-ui/icons/School";
import PeopleIcon from "@material-ui/icons/People";
import PublicIcon from "@material-ui/icons/Public";
// Custom Components
import Home from "./components/Home";
import WhatWeDo from "./components/WhatWeDo";
import OurStory from "./components/OurStory";
import ProjectEmpower from "./components/ProjectEmpower";
import SchoolFund from "./components/SchoolFund";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import AmbassadorPrograms from "./components/AmbassadorPrograms";
import Yoga from "./components/Yoga";

// Stub Components
const YogaTeachers = () => <h2>Yoga Teachers</h2>;

const styles = theme => ({
  root: {
    minHeight: "100vh"
  },
  toolbar: {
    justifyContent: "flex-end"
  },
  brand: {
    marginRight: "auto"
  },
  z9999: {
    zIndex: 9999
  }
});

class Router extends Component {
  state = {
    aboutOpen: false,
    getInvolvedOpen: false,
    drawerOpen: false
  };

  handleAboutToggle = () => {
    this.setState(state => ({ aboutOpen: !state.aboutOpen }));
  };

  handleGetInvolvedToggle = () => {
    this.setState(state => ({ getInvolvedOpen: !state.getInvolvedOpen }));
  };

  handleAboutClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ aboutOpen: false });
  };

  handleGetInvolvedClose = event => {
    if (this.anchorEl2.contains(event.target)) {
      return;
    }
    this.setState({ getInvolvedOpen: false });
  };

  toggleDrawer = open => () => {
    this.setState({
      drawerOpen: open
    });
  };

  renderRoutes = () => {
    return (
      <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/what-we-do/" component={WhatWeDo} />
        <Route path="/our-story/" component={OurStory} />
        <Route path="/project-empower/" component={ProjectEmpower} />
        <Route path="/school-fund/" component={SchoolFund} />
        <Route path="/donate/" component={Donate} />
        <Route path="/yoga/" component={Yoga} />
        <Route path="/yoga-teachers/" component={YogaTeachers} />
        <Route path="/expertise/" component={Expertise} />
        <Route path="/ambassador-programs/" component={AmbassadorPrograms} />
        <Route path="/contact/" component={Contact} />
      </Fragment>
    );
  };

  renderSmallScreenNav = () => {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button onClick={this.toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          anchor="top"
          open={this.state.drawerOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div className={classes.list}>
            <List>
              <Link to="/" style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
              <Divider />
              <Link to="/what-we-do/" style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={"What We Do"} />
                </ListItem>
              </Link>
              <Link to="/our-story/" style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <PublicIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Our Story"} />
                </ListItem>
              </Link>
              <Link to="/project-empower/" style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Project Empower"} />
                </ListItem>
              </Link>
              <Link to="/school-fund/" style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText primary={"School Fund"} />
                </ListItem>
              </Link>
              <Divider />
              <Link to="/yoga/" style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Yoga"} />
                </ListItem>
              </Link>
              <Link to="/expertise/" style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Expertise"} />
                </ListItem>
              </Link>
              <Link
                to="/ambassador-programs/"
                style={{ textDecoration: "none" }}
              >
                <ListItem
                  button
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Ambassador Programs"} />
                </ListItem>
              </Link>
              <Divider />
              <Link to="/contact/" style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Contact"} />
                </ListItem>
              </Link>
              <Divider />
              <Link to="/donate/" style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Donate"} />
                </ListItem>
              </Link>
            </List>
          </div>
        </SwipeableDrawer>
      </Fragment>
    );
  };

  renderLargeScreenNav = () => {
    const { aboutOpen, getInvolvedOpen } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>Home</Button>
        </Link>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={aboutOpen ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={this.handleAboutToggle}
          >
            About
            <ArrowDropDown />
          </Button>
          <Popper
            open={aboutOpen}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            className={classes.z9999}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleAboutClose}>
                    <MenuList>
                      <Link
                        to="/what-we-do/"
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem onClick={this.handleAboutClose}>
                          What We Do
                        </MenuItem>
                      </Link>
                      <Link to="/our-story/" style={{ textDecoration: "none" }}>
                        <MenuItem onClick={this.handleAboutClose}>
                          Our Story
                        </MenuItem>
                      </Link>
                      <Link
                        to="/project-empower/"
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem onClick={this.handleAboutClose}>
                          Project Empower
                        </MenuItem>
                      </Link>
                      <Link
                        to="/school-fund/"
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem onClick={this.handleAboutClose}>
                          School Fund
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl2 = node;
            }}
            aria-owns={getInvolvedOpen ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={this.handleGetInvolvedToggle}
          >
            Get Involved
            <ArrowDropDown />
          </Button>
          <Popper
            className={classes.z9999}
            open={getInvolvedOpen}
            anchorEl={this.anchorEl2}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleGetInvolvedClose}>
                    <MenuList>
                      <Link to="/donate/" style={{ textDecoration: "none" }}>
                        <MenuItem onClick={this.handleGetInvolvedClose}>
                          Donate
                        </MenuItem>
                      </Link>
                      <Link to="/yoga/" style={{ textDecoration: "none" }}>
                        <MenuItem onClick={this.handleGetInvolvedClose}>
                          Yoga
                        </MenuItem>
                      </Link>
                      <Link to="/expertise/" style={{ textDecoration: "none" }}>
                        <MenuItem onClick={this.handleGetInvolvedClose}>
                          Expertise
                        </MenuItem>
                      </Link>
                      <Link
                        to="/ambassador-programs/"
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem onClick={this.handleGetInvolvedClose}>
                          Ambassador Programs
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <Link to="/donate/" style={{ textDecoration: "none" }}>
          <Button>Donate</Button>
        </Link>
        <Link to="/contact/" style={{ textDecoration: "none" }}>
          <Button>Contact</Button>
        </Link>
      </Fragment>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar color="primary" className={classes.toolbar}>
              <Typography
                className={classes.brand}
                color="textPrimary"
                variant="h5"
              >
                Rise Rwanda
              </Typography>
              {isWidthUp("md", this.props.width)
                ? this.renderLargeScreenNav()
                : this.renderSmallScreenNav()}
            </Toolbar>
          </AppBar>
          {this.renderRoutes()}
        </div>
      </BrowserRouter>
    );
  }
}

export default withWidth()(withStyles(styles, { withTheme: true })(Router));
