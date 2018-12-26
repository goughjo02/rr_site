import React, { Component } from "react";
// Material UI Stuff
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
// Material Icons
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
// React Router stuff
import { Link } from "react-router-dom";
// Lodash stuff
import uniqueId from "lodash/uniqueId";

const styles = theme => ({
  z9999: {
    zIndex: 9999
  }
});

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleToggle = () => {
    this.setState({ open: true });
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const { classes, title, children } = this.props;
    return (
      <div>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          {title}
          <ArrowDropDown />
        </Button>
        <Popper
          open={open}
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
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    {Object.values(children).map(e => {
                      return (
                        <Link
                          key={uniqueId()}
                          to={e.route}
                          style={{ textDecoration: "none" }}
                        >
                          <MenuItem onClick={this.handleClose}>
                            {e.title}
                          </MenuItem>
                        </Link>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DropDownMenu);
