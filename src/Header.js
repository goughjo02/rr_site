import React, { Component, Fragment } from "react";
// React Router stuff
import { Link } from "react-router-dom";
// Images
import Logo from "./assets/logo.png";
// React Headroom
import Headroom from "react-headroom";
// Material UI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import Typography from "@material-ui/core/Typography";
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
// Routes
import { RoutingInformation } from "./Routes";
// Lodash stuff
import uniqueId from "lodash/uniqueId";

const styles = theme => ({
  toolbar: {
    justifyContent: "flex-end"
  },
  z9999: {
    zIndex: 9999
  },
  logoHolder: {
    marginRight: "auto"
  },
  headLogo: {
    height: "60px",
    width: "auto"
  }
});

class Header extends Component {
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
              {Object.values(RoutingInformation).map(e => {
                if (e.hidden) {
                  return null;
                } else if (!e.path) {
                  return (
                    <Fragment
                      key={uniqueId()}>
                      {Object.values(e).map(f => {
                        return (
                          <Link
                            key={uniqueId()}
                            to={`${f.route}`}
                            style={{ textDecoration: "none" }}
                          >
                            <ListItem
                              button
                              onClick={this.toggleDrawer(false)}
                              onKeyDown={this.toggleDrawer(false)}
                            >
                              <ListItemIcon>{f.icon}</ListItemIcon>
                              <ListItemText primary={`${f.title}`} />
                            </ListItem>
                          </Link>
                        );
                      })}
                      <Divider />
                    </Fragment>
                  );
                } else {
                  return (
                    <Fragment key={uniqueId()}>
                      <Link
                        to={`${e.route}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ListItem
                          button
                          onClick={this.toggleDrawer(false)}
                          onKeyDown={this.toggleDrawer(false)}
                        >
                          <ListItemIcon>{e.icon}</ListItemIcon>
                          <ListItemText primary={`${e.title}`} />
                        </ListItem>
                      </Link>
                      <Divider />
                    </Fragment>
                  );
                }
              })}
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
    const largeScreen = isWidthUp("md", this.props.width);
    return (
      <Headroom>
        <AppBar position="relative">
          <Toolbar color="primary" className={classes.toolbar}>
            <div className={classes.logoHolder}>
              <img src={Logo} className={classes.headLogo} alt="logo" />
            </div>
            {largeScreen
              ? this.renderLargeScreenNav()
              : this.renderSmallScreenNav()}
          </Toolbar>
        </AppBar>
      </Headroom>
    );
  }
}

export default withWidth()(withStyles(styles, { withTheme: true })(Header));
