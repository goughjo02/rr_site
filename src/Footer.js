import React from "react";
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
    justifyContent: "space-between",
    alignSelf: "flex-end"
  }
});

const Footer = props => {
  const { classes } = props;
  return (
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>Rise Rwanda</div>
        </Toolbar>
      </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(Footer);
