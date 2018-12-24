import React, { Component } from "react";
// Material UI stuff
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    padding: "24px",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="primary" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div>Rise Rwanda</div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Footer);
