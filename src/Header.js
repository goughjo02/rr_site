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
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
// Material Icons
import MenuIcon from "@material-ui/icons/Menu";
// Custom Component(
import DropDownMenu from "./components/drop-down-menu";
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
    drawerOpen: false
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
                    <Fragment key={uniqueId()}>
                      {Object.values(e.children).map(f => {
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
    return (
      <Fragment>
        {Object.values(RoutingInformation).map(e => {
          if (e.hidden) {
            return null;
          } else if (!e.path) {
            return (
              <DropDownMenu
                key={uniqueId()}
                title={e.title}
                children={e.children}
              />
            );
          } else {
            return (
              <Fragment key={uniqueId()}>
                <Link
                  key={uniqueId()}
                  to={e.route}
                  style={{ textDecoration: "none" }}
                >
                  <Button>{e.title}</Button>
                </Link>
              </Fragment>
            );
          }
        })}
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
